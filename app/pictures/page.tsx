import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex sticky top-0 bg-gray-800 text-white lg:px-6 px-3 lg:py-2 py-1 z-50 shadow-lg items-center">
        <Button
          asChild
          className="bg-white text-black md:text-xs lg:text-lg border-2 border-gray-300 lg:rounded-lg md:rounded-xs py-0 px-2 lg:py-2 lg:px-4 hover:bg-gray-100"
        >
          <Link href="/">Home Page</Link>
        </Button>
        <p className="px-3 lg:px-40 md:text-xs lg:text-lg">
          Welcome to My Website! Check out the latest updates.
        </p>
      </div>
      <div className="grid grid-rows-[60px_1fr_60px]  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-main-background">
        <div className="bg-gray-200 p-10 rounded-lg shadow-lg mt-20">
          <h1 className="text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-10">
            My Pictures
          </h1>
          <div className="flex space-x-5 "></div>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default page;
