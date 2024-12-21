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
      <div className="grid grid-rows-[60px_1fr_60px]  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-main-background">
        <div className="bg-gray-200 p-10 rounded-lg shadow-lg mt-20">
          <h1 className="text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-10">
            About This Website
          </h1>
          <div className="flex space-x-5 "></div>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default page;
