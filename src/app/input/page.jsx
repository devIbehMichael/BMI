"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img2 from "../resources/img2.png"; // Male image
import img3 from "../resources/img3.png"; // Female image
import img6 from "../resources/img6.png";
export default function Home() {
  
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg"); // Default weight unit
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("m"); // Default height unit
  const [age, setAge] = useState("");
  const [gender, setGender] = useState('male');
  const router = useRouter();

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!weight || !height || !age || !gender) {
      alert("Please fill in all fields!");
      return;
    }

    // Convert to metric units if necessary
    let weightInKg = weightUnit === "kg" ? parseFloat(weight) : parseFloat(weight) / 2.20462;
    let heightInMeters = heightUnit === "m" ? parseFloat(height) : parseFloat(height) * 0.3048;

    const bmiData = {
      weight: weightInKg.toFixed(2),
      height: heightInMeters.toFixed(2),
      age,
      gender,
    };

    localStorage.setItem("bmiData", JSON.stringify(bmiData));
    router.push("/Results");
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen"    style={{ backgroundImage: `url(${img6.src})` }}>
      <h1 className="text-5xl font-semibold font-title">BMI Calculator</h1>
      <form onSubmit={handleCalculate}>
        <div className="flex flex-col gap-4 items-center">
          <label>Choose Your Gender:</label>
          <div className="flex flex-row">
            <Image
              src={img3}
              alt="Male"
              width={200}
              height={200}
              onClick={() => setGender("male")}
              className={` ${gender === "male" ? "bg-[#0c205a] rounded-3xl shadow-lg" : ""}`}
            />
            <Image
              src={img2}
              alt="Female"
              width={200}
              height={200}
              onClick={() => setGender("female")}
              className={` ${gender === "female" ? "bg-[#0c205a] rounded-3xl shadow-lg" : ""}`}
            />
          </div>

          <div className="">
            <label className="text-2xl">Weight:</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className="border-2 border-blue-500 rounded-2xl px-4 py-3 text-2xl shadow-lg"
              />
              <select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
                className="border-2 border-blue-500 rounded-2xl px-4 py-3 text-2xl shadow-lg"
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>

          <div className="text-2xl">
            <label>Height:</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.01"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className="border-2 border-blue-500 rounded-2xl px-4 py-3 text-2xl shadow-lg"
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
                className="border-2 border-blue-500 rounded-2xl px-4 py-3 text-2xl shadow-lg"
              >
                <option value="m">m</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>

          <div className="text-2xl space-x-7">
            <label className="font-title">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="border-2 border-blue-500 rounded-2xl px-4 py-3 text-2xl shadow-lg"
            />
          </div>
          <button
            type="submit"
            className="px-12 py-6 bg-[#0c205a] rounded-xl my-4 text-2xl text-white font-title shadow-lg"
          >
            Calculate BMI
          </button>
        </div>
      </form>
    </div>
  );
}
