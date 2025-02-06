"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAllPictures, postNewPicture } from "../api/pictures";

import { ImageForm } from "./form";

export default function Pictures() {
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
              className="flex flex-col bg-neutral-700 w-[500px] h-[360px] p-3 rounded-md justify-between"
              key={i + "a"}
            >
              <img
                key={i + "b"}
                src={pic.URL}
                alt="new"
                className="w-full h-[275px] object-contain rounded-md"
              />
              <div
                className="bg-neutral-300 w-full h-[50px] p-3 rounded-md"
                key={i + "c"}
              >
                <p className="px-3 md:text-xs lg:text-lg text-left">
                  {"By " + pic.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

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
      <div className="grid grid-rows-[60px_1fr_auto_60px] items-center justify-items-center min-h-screen gap-10 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-main-background">
        <div></div>
        <div className="bg-gray-200 p-10 rounded-lg shadow-lg">
          <h1 className="text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-10">
            My Pictures
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
    </>
  );
}
