"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getViewCount, updateViewCount } from "./api/view-count";
import logo from "./public/kbz-logo.png";
import { VisitGlobe } from "./components/visitGlobe";
import { AnimatedBackground } from "./components/animatedBackground";

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
  //document.body.style.overflow = "hidden";

  return (
    <div className="z-0 relative bg-stone-950">
      <AnimatedBackground></AnimatedBackground>

      <div className="z-20 inset-0 absolute grid grid-cols-[1fr_1050px] h-screen font-[family-name:var(--font-geist-sans)] ">
        <div className=" h-screen p-5 lg:p-5 bg-stone-950/80 backdrop-blur-lg rounded-none border-r-[6px] border-double border-stone-100">
          <h1 className="text-center text-gray-500 text-xs lg:text-md">
            My Cloud Resume Challange and Personal Website
          </h1>

          <img
            src="/kbz-logo.png"
            className="w-[300px] h-auto mx-auto my-6"
          ></img>

          <div className="grid grid-flow-row gap-1  font-bold text-xl">
            <Button
              asChild
              className="bg-transparent hover:bg-transparent hover:font-bold"
            >
              <Link href="/about_website">About This Website</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent hover:bg-transparent hover:font-bold"
            >
              <Link href="/resume">My Resume</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent hover:bg-transparent hover:font-bold"
            >
              <Link href="/pictures">Gallery</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent hover:bg-transparent hover:font-bold"
            >
              <Link href="/about_me">About Me</Link>
            </Button>

            <Button
              asChild
              className="bg-transparent hover:bg-transparent hover:font-bold"
            >
              <Link href="/viceragenesis">Viceragenesis</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent hover:bg-transparent hover:font-bold"
            >
              <Link href="/battle-of-ships">Battle of Ships</Link>
            </Button>
          </div>
          <br></br>
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-[550px_500px]">
            <div className="px-4 py-7 flex flex-col justify-between backdrop-blur-lg h-[250px] bg-stone-950/80 border-b-[2px] border-r-[2px] border-stone-200 ">
              <p className="text-2xl font-bold text-stone-200">
                Distraction Timer extension for Firefox is out
              </p>
              <Button className="w-min p-0 text-5xl font-bold text-stone-200 bg-transparent hover:bg-transparent hover:text-white hover:font-extrabold">
                {" "}
                <Link href="https://addons.mozilla.org/en-US/firefox/addon/distraction-timer/">
                  Get it now!
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center  h-[250px] backdrop-blur-lg bg-stone-950/80 border-b-[2px] border-stone-200 ">
              <VisitGlobe></VisitGlobe>
              <div className="flex flex-col text-stone-100 text-sm">
                <a>{totalViewCount + " visits around the world."} </a>
                <a>{individualViewCount + " visits from your IP address."} </a>
              </div>
            </div>
          </div>
          <div className="flex backdrop-blur-lg bg-stone-950/80 border-t-[2px] border-stone-200 px-3">
            <p className="text-3xl font-bold text-stone-200">
              Welcome to khuebanhzai.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
