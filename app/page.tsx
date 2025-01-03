"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getViewCount, updateViewCount } from "./api/view-count";

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
    <div className="grid grid-rows-[100px_1fr_100px]  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-main-background">
      <div className="absolute top-10 left-10 flex flex-col gap-4  max-w-xs">
        <div className="bg-blue-500 text-white inline-flex items-center justify-center px-4 py-2 rounded-lg shadow-lg text-sm font-medium border-4 border-white">
          This website has been visited from {totalViewCount} different
          addresses
        </div>

        <div className="bg-blue-500 text-white inline-flex items-center justify-center px-4 py-2 rounded-lg shadow-lg text-sm font-medium border-4 border-white">
          Your address has visited this website {individualViewCount} times
        </div>
      </div>
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg mt-40">
        <h1 className="text-center text-gray-500">
          My Cloud Resume Challange and Personal Website
        </h1>
        <h1 className="text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-10">
          Khuebanhzai
        </h1>
        <div className="flex space-x-5 ">
          <Button asChild>
            <Link href="/about_website">About This Website</Link>
          </Button>
          <Button asChild>
            <Link href="/resume">My Resume</Link>
          </Button>
          <Button asChild>
            <Link href="/pictures">My Pictures</Link>
          </Button>
          <Button asChild>
            <Link href="/about_me">About Me</Link>
          </Button>
        </div>
        <br></br>
      </div>
    </div>
  );
}
