import Image from "next/image";
import img1 from "./resources/img1.png";
import img6 from "./resources/img6.png";
import Link from "next/link";

export default function Home() {
  // Inline the SVG as a data URL


  return (
    <div
      className="flex flex-col gap-5 justify-center items-center min-h-screen font-title bg-cover bg-no-repeat bg-center shadow-lg"
      style={{ backgroundImage: `url(${img6.src})` }}
    >
      <Image src={img1} alt="BMI Calculator" width={300} height={300} />
      <h1 className="text-3xl font-semibold lg:text-4xl">
        Welcome to the BMI Calculator!
      </h1>
      <h3 className="text-2xl w-3/5 text-center lg:text-3xl">
        Quickly calculate your Body Mass Index and learn more about your weight
      </h3>
      <Link href="/input">
        <button className="bg-[#608BC1] hover:bg-[#133E87] delay-100 ease-in-out py-4 px-10 rounded-2xl text-2xl text-white font-light shadow-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
}
