import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
/*
export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    return { props: { data } };
  } catch (error) {
    return { props: { error: "error" } };
  }
}
  */

const picNum = 10;
async function Pictures() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  const test = await fetch(`${API_BASE_URL}/view-count?ip="120.21.90.103"`);
  const testData = await test.json();
  return (
    <>
      <h2 className="text-xl font-semibold">{testData.individualViewCount}</h2>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.from({ length: picNum }, (_, i) => (
          <div
            className="flex flex-col bg-neutral-700 w-[500px] h-[360px] p-3 rounded-md justify-between"
            key={i}
          >
            <img
              key={i}
              src="https://s3.ap-southeast-2.amazonaws.com/images-khuebanhzai.com/test.PNG%2Bmjfoeeyiasd"
              alt="new"
              className="w-full h-[275px] object-contain rounded-md"
            />
            <div
              className="bg-neutral-300 w-full h-[50px] p-3 rounded-md align"
              key={i}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

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
      <div className="grid grid-rows-[60px_1fr_60px] items-center justify-items-center min-h-screen gap-1 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-main-background">
        <div></div>
        <div className="bg-gray-200 p-10 rounded-lg shadow-lg">
          <h1 className="text-7xl font-extrabold text-center text-indigo-600 drop-shadow-lg px-50 py-10">
            My Pictures
          </h1>
          <div className="flex space-x-5 "></div>
          <br></br>
          <Pictures />
        </div>
      </div>
    </>
  );
};

export default page;
