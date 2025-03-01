"use client";

import React, { useEffect } from "react";
import { StickyHeader } from "../components/stickyHeader";
//import game from "../public/viceragenesis/index.html";

export default function AboutMe() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="bg-stone-900">
      <StickyHeader></StickyHeader>
      <div className="grid items-center justify-items-center py-4 min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="bg-gray-200 p-3 lg:p-10 rounded-lg shadow-lg w-[1100px] flex-auto justify-center items-center">
          <div className="flex items-center justify-center ">
            <iframe
              src={`/viceragenesis/viceragenesis.html`}
              width={960}
              height={600}
              title="Viceragenesis game"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
