"use client";

import React, { useEffect, useState } from "react";
import { StickyHeader } from "../components/stickyHeader";
import ChatBox from "./chatBox";
export default function BattleOfShips() {
  return (
    <div className="bg-stone-900">
      <StickyHeader></StickyHeader>
      <div className="grid items-center justify-items-center min-h-screen p-2 lg:p8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="bg-gray-200 p-3 lg:p-10 rounded-lg shadow-lg mt-10">
          <h1 className="text-7xl font-extrabold text-center text-stone-900  drop-shadow-lg py-3">
            Battle of Ships
          </h1>
          <ChatBox></ChatBox>
        </div>
      </div>
    </div>
  );
}
