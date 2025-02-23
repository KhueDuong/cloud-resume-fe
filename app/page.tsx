"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getViewCount, updateViewCount } from "./api/view-count";
import logo from "./public/kbz-logo.png";
import { VisitGlobe } from "./components/visitGlobe";

export default function Home() {
  const [totalViewCount, setTotalViewCount] = useState(null);
  const [individualViewCount, setIndividualViewCount] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const result = await getViewCount();
        setTotalViewCount(result.totalViewCount);
        setIndividualViewCount(result.individualViewCount);
      } catch (error) {
        console.error("Error fetching view count:", error);
      }
    };

    updateViewCount(); // Call the function to update the view count (side effect)
    fetchCount(); // Fetch the count and update state
  }, []);

  return (
    <div className="grid grid-cols-[1fr_500px] lg:grid-cols-[1fr_500px]  justify-items-center h-screen pt-1 lg:pt-3 pb-1 gap-1 lg:gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-stone-950">
      <div className=" h-[410px] p-5 lg:p-5 bg-stone-700 mt-10 rounded-2xl border-[1px] border-stone-500 justify-center items-center">
        <h1 className="text-center text-gray-500 text-xs lg:text-md">
          My Cloud Resume Challange and Personal Website
        </h1>

        <img src={logo.src} className="w-[400px] h-auto mx-auto my-6"></img>

        <div className="grid grid-cols-2 gap-1 lg:flex lg:space-x-5">
          <Button asChild className="text-xs lg:text-md">
            <Link href="/about_website">About This Website</Link>
          </Button>
          <Button asChild className="text-xs lg:text-md">
            <Link href="/resume">My Resume</Link>
          </Button>
          <Button asChild className="text-xs lg:text-md">
            <Link href="/pictures">My Pictures</Link>
          </Button>
          <Button asChild className="text-xs lg:text-md">
            <Link href="/about_me">About Me</Link>
          </Button>
        </div>
        <br></br>
      </div>
      <div className="flex items-center justify-center w-[490px] h-[250px] bg-stone-950 mt-10 rounded-2xl border-[1px] border-stone-500 ">
        <VisitGlobe></VisitGlobe>
        {/* 
          <div className="bg-blue-500 text-white items-center justify-center px-4 py-2 rounded-lg shadow-lg md:text-xs lg:text-sm font-medium border-4 border-white">
            This website has been visited from {totalViewCount} different
            addresses
          </div>

          <div className="bg-blue-500 text-white  items-center justify-center px-4 py-2 rounded-lg shadow-lg text-sm font-medium border-4 border-white hidden md:block">
            Your address has visited this website {individualViewCount} times
          </div>
          */}
        <div className="flex flex-col text-stone-100 text-sm">
          <a>{totalViewCount + " visits around the world."} </a>
          <a>{individualViewCount + " visits from your IP address."} </a>
        </div>
      </div>
    </div>
  );
}
