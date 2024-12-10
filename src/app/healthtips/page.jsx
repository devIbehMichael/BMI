"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import img9 from '../resources/img9.png'
export default function HealthTips() {
  const [bmiData, setBmiData] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("bmiData"));
    if (storedData) {
      setBmiData(storedData);
    }
  }, []);

  if (!bmiData) {
    return <p>No data found. Please calculate your BMI first.</p>;
  }

  const { weight, height, age, gender } = bmiData;

  // Calculate BMI
  const bmi = (weight / (height * height)).toFixed(2);

  // Dynamic tips generation
  const generateTips = () => {
    let tips = [];

    // General health tips
    tips.push("Drink plenty of water daily to stay hydrated.");
    tips.push("Get at least 7-8 hours of sleep every night.");

    // Age-specific tips
    if (age < 18) {
      tips.push("Include calcium-rich foods to support growing bones.");
      tips.push("Engage in at least 60 minutes of physical activity daily.");
    } else if (age >= 18 && age <= 50) {
      tips.push("Maintain a balanced diet rich in protein, fiber, and healthy fats.");
      tips.push("Incorporate strength training exercises into your routine.");
    } else {
      tips.push("Focus on maintaining mobility with regular stretching.");
      tips.push("Consume foods rich in vitamin D and calcium for bone health.");
    }

    // Gender-specific tips
    if (gender === "female") {
      tips.push("Ensure you get enough iron-rich foods, especially during menstruation.");
      tips.push("Incorporate weight-bearing exercises to strengthen bones.");
    } else if (gender === "male") {
      tips.push("Focus on building muscle mass with protein-rich foods.");
      tips.push("Include cardiovascular exercises for heart health.");

    }

    // BMI-specific tips
    if (bmi < 18.5) {
      tips.push(
        "Since your BMI suggests you are underweight. Consider eating nutrient-dense foods like nuts, seeds, and avocados."
      );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      tips.push(
        "Your BMI is within a healthy range. Keep up the great work with regular physical activity and a balanced diet."
      );
    } else {
      tips.push(
        "Since your BMI suggests you are overweight. Focus on portion control, avoiding processed foods, and incorporating more fruits and vegetables into your meals."
      );
    }

    return tips;
  };

  const tips = generateTips();

  return (
    
    <div className="flex flex-col justify-center items-center font-title gap-8  min-h-screen border-2 border-gray bg-white bg-cover "  style={{ backgroundImage: `url(${img9.src})` }}>
      
      <h1 className="text-4xl font-bold text-6xl">Health Tips</h1>
      <div className="flex flex-col justify-center items-center  lg:w-3/5">
       
        <ul className="flex flex-col justify-center list-decimal list-inside w-4/5 gap-2 text-2xl">
          {tips.map((tip, index) => (
            <li key={index} className="">{tip}</li>
          ))}
        </ul>
      </div>
<Link href="/input"><button
        className=" p-4 bg-blue-600 rounded-xl text-white text-2xl"
      >
        Back to Calculator
      </button></Link>
      
    </div>
  );
}
