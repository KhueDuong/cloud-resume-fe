"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { StickyHeader } from "../components/stickyHeader";

export default function AboutMe() {
  document.body.style.overflow = "auto";

  return (
    <div className="bg-stone-900">
      <StickyHeader></StickyHeader>
      <div className="grid items-center justify-items-center min-h-screen p-2 lg:p8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="bg-gray-200 p-3 lg:p-10 rounded-lg shadow-lg mt-10 max-w-3xl">
          <h1 className="text-3xl lg:text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-3">
            About Me
          </h1>
          <div className="flex space-x-5 "></div>
          <br></br>
          <div className="bg-gray-300 p-3 rounded-lg shadow-lg max-w-3xl">
            <p className="text-lg text-gray-800 drop-shadow-lg">Hi!</p>
            <br></br>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              My real name is Duong Hoang Khue (Khue is my first name, Duong is
              last name and Hoang is middle name). Because of the Vietnamese
              naming system my name is flipped around like that, so you&apos;ll
              usually see something like Hoang Khue Duong or even Hoang K. Duong
              on my documents. So legally, my first name is Hoang Khue and
              sometimes people call me Hoang even though technically thats my
              middle name.
            </p>
            <br></br>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              I was born on 18th Dec 2024, and lived in Hanoi, Vietnam until 17.
              I moved to Melbourne, Australia for my Bachelor Degree study at
              The University of Melbourme and I am set to graduate this June.
            </p>
            <br></br>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              I like cooking, playing my guitar and sometimes videos games
              during my free time. If you navigate to the 'My Pictures' page you
              can see some of my baking goods and beautiful dishes that I made.
            </p>
            <div className="flex space-x-5 "></div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
