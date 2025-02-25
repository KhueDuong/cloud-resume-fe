import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../public/kbz-logo.png";
import dynamic from "next/dynamic";

export function StickyHeader() {
  return (
    <div className="flex sticky top-0 bg-stone-950/75 border-b-[2px] border-stone-300  backdrop-blur-lg text-white py-[5px] z-50 shadow-lg items-center">
      <Button
        asChild
        className="w-[120px] bg-transparent md:text-xs lg:text-lg border-none  py-0 px-2 lg:py-2 lg:px-4 hover:bg-transparent"
      >
        <Link href="/">
          <img src={logo.src} className="w-[70px] h-auto mx-auto my-6"></img>
        </Link>
      </Button>
      <Button
        asChild
        className="bg-transparent text-stone-300 font-bold hover:text-white md:text-xs lg:text-sm border-none py-0 px-2 lg:py-2 lg:px-4 hover:bg-transparent"
      >
        <Link href="/about_website">About this Website</Link>
      </Button>
      <Button
        asChild
        className="bg-transparent text-stone-300 font-bold hover:text-white md:text-xs lg:text-sm border-none py-0 px-2 lg:py-2 lg:px-4 hover:bg-transparent"
      >
        <Link href="/resume">My Resume</Link>
      </Button>
      <Button
        asChild
        className="bg-transparent text-stone-300 font-bold hover:text-white md:text-xs lg:text-sm border-none py-0 px-2 lg:py-2 lg:px-4 hover:bg-transparent"
      >
        <Link href="/pictures">Gallery</Link>
      </Button>
      <Button
        asChild
        className="bg-transparent text-stone-300 font-bold hover:text-white md:text-xs lg:text-sm border-none py-0 px-2 lg:py-2 lg:px-4 hover:bg-transparent"
      >
        <Link href="/about_me">About Me</Link>
      </Button>
    </div>
  );
}
