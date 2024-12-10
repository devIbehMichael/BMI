"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img4 from "../resources/img4.png";
import Link from "next/link";
import img7 from '../resources/im7.png'
export default function BmiResults() {
  const [bmiData, setBmiData] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("bmiData"));
    if (storedData) {
      setBmiData(storedData);
    }
  }, []);

  if (!bmiData) {
    return <p>No results found. Please calculate your BMI first.</p>;
  }

  const { weight, height, age, gender } = bmiData;

  // Perform BMI calculation
  const baseBmi = (weight / (height * height)).toFixed(2);
  const genderAdjustedBmi =
    gender === "female" ? (baseBmi * 0.95).toFixed(2) : baseBmi;

  // Determine BMI category and advice
  let category, advice;
  if (genderAdjustedBmi < 18.5) {
    category = "Underweight";
    advice =
      "Your BMI indicates that you are underweight. Consider increasing your caloric intake with a balanced diet and consult a healthcare professional if necessary.";
  } else if (genderAdjustedBmi >= 18.5 && genderAdjustedBmi <= 24.9) {
    category = "Normal weight";
    advice =
      "Your BMI is within a healthy range. Maintain your weight by keeping a balanced diet and engaging in regular physical activity.";
  } else {
    category = "Overweight";
    advice =
      "Your BMI indicates that you are overweight. Consider incorporating regular exercise, reducing portion sizes, and choosing nutritious foods.";
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-title gap-1 bg-contain" style={{backgroundImage:`url(${img7.src})`}} >
     <div className="flex flex-col justify-center items-center gap-1">
      <Image src={img4} alt="Results" width={280} height={280} />
      <h1 className="text-xl font-semibold ">BMI Results</h1>
      <h2 className="text-xl">Your BMI is: <span className="text-3xl font-medium text-purple-950">{genderAdjustedBmi}</span></h2>
      <p>Category:  <span className="text-purple-600">{category}</span></p>
      </div>
      <p className="text-lg text-center max-w-lg mt-4">{advice}</p>

      <div className="flex gap-3 mt-6">
        <Link href="/input">
        <button
          className="border-2 border-gray-500 p-3 bg-purple-400 rounded-2xl text-xl"
        >
          Recalculate
        </button>
        </Link>
        <Link href='/healthtips'>
        <button
          className="border-2 border-gray-950 bg-purple-950 text-white rounded-2xl text-xl p-3"
        >
          Health Tips
        </button></Link>
      </div>
    </div>
  );
}
