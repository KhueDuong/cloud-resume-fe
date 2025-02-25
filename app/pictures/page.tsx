"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAllPictures, postNewPicture } from "../api/pictures";

import { ImageForm } from "./form";
import { StickyHeader } from "../components/stickyHeader";

export default function Pictures() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  function PicturesFeed() {
    const [pictures, setPictures] = useState<any[]>([]);
    useEffect(() => {
      const fetchCount = async () => {
        try {
          const data = await getAllPictures();
          setPictures(data.pictures);
        } catch (error) {
          console.error("Error fetching pictures:", error);
        }
      };
      fetchCount(); // Fetch the count and update state
    }, []);

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {pictures.map((pic, i) => (
            <div
              className="flex flex-col divide-y-[1px] divide-stone-300 bg-stone-200 border-[1px] shadow-md w-[500px] rounded-md"
              key={i + "a"}
            >
              <img
                key={i + "b"}
                src={pic.URL}
                alt="new"
                className="w-full h-[275px] object-contain rounded-md p-3"
              />

              <div
                className=" text-stone-800 w-full h-[50px] p-3"
                key={i + "c"}
              >
                <p className="px-3 md:text-xs lg:text-lg text-left">
                  {"By " + pic.author + ": " + pic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="bg-stone-900">
      <StickyHeader></StickyHeader>
      <div className="grid grid-flow-row items-center justify-items-center min-h-screen gap-10 font-[family-name:var(--font-geist-sans)] py-10">
        <div className="bg-stone-300 p-10 rounded-lg shadow-lg">
          <h1 className="text-7xl font-extrabold text-center text-stone-900  drop-shadow-lg py-3">
            Gallery
          </h1>
          <div className="flex space-x-5 "></div>
          <br></br>
          <PicturesFeed />
        </div>
        <div className="bg-gray-200 p-10 rounded-lg shadow-lg  w-[1100px]">
          <h1 className="text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-10">
            Submit a Picture
          </h1>
          <div>
            <ImageForm></ImageForm>
          </div>
        </div>
      </div>
    </div>
  );
}
