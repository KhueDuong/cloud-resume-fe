import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[100px_1fr_100px]  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-main-background">
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
