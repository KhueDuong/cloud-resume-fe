import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex sticky top-0 bg-gray-800 text-white px-6 py-2 z-10 shadow-lg items-center">
        <Button
          asChild
          className="bg-white text-black border-2 border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100"
        >
          <Link href="/">Home Page</Link>
        </Button>
        <p className="px-40">
          Welcome to My Website! Check out the latest updates.
        </p>
      </div>
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-main-background">
        <div className="bg-gray-200 p-10 rounded-lg shadow-lg mt-10 max-w-3xl">
          <h1 className="text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-3">
            About This Website
          </h1>
          <div className="flex space-x-5 "></div>
          <br></br>
          <div className="bg-gray-300 p-3 rounded-lg shadow-lg max-w-3xl">
            <p className="text-2xl font-extrabold text-center text-indigo-600 drop-shadow-lg">
              Introduction
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              Welcome to my beautiful website!
            </p>
            <br></br>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              Thank you for visiting. This website serves as my personal
              website, as well as my own attempt at the Cloud Resume Challange.
              As such, the website is a mix between technical showcases and
              depictions of my personal life.
            </p>
            <div className="flex space-x-5 "></div>
            <br></br>
          </div>
          <br></br>
          <div className="bg-gray-300 p-3 rounded-lg shadow-lg max-w-3xl">
            <p className="text-2xl font-extrabold text-center text-indigo-600 drop-shadow-lg">
              What&apos;s on this Website?
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - About This Website: How and Why this Website was built.
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - My Resume: My Developer Resume.
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - My Pictures: Random pictures and stories from my life.
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - About Me: A little bit about me.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
