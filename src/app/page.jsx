import Image from "next/image";
import img1 from "./resources/img1.png";
import Link from "next/link";
export default function Home() {
  return (
         <div className=" flex flex-col gap-5 justify-center items-center min-h-screen font-title">
      <Image src={img1} alt="BMI Calculator" width={400} height={300} />
      <h1 className="text-3xl font-semibold lg:text-5xl">Welcome to the BMI Calculator!</h1>
      <h3 className="text-2xl w-3/5 text-center lg:text-3xl">Quickly calculate your Body Mass Index and learn More about your weight </h3>
<Link href="/input">
      <button className="bg-[#608BC1]  hover:bg-[#133E87] delay-100 ease-in-out py-4 px-10 rounded-2xl text-2xl text-white font-light" >Get Started</button></Link>
    </div>
  );
}