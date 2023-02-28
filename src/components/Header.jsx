import React from "react";
import { useState } from "react";
export default function Header(props) {
  return (
    <div className="text-2xl py-4 px-8 flex justify-between border-b-2 border-gray-500">
      <div className="flex gap-x-2">
        <img src="/images/reactjs-icon 1.jpg" className="w-8 object-fit"  alt="react icon"/>
        <p className="text-[#00ABCA] font-bold">ReactFacts</p>
      </div>
      <div className="text-sm font-semibold flex  gap-2 items-center">
        <p className={props.mode ? "text-black" : "text-gray-400"}>Light</p>
        <div
          className={` shadow-md rounded-lg h-fit ${
            props.mode ? "bg-black pr-4 pl-0" : "bg-white pr-0 pl-4"
          }`}
          onClick={props.handle}
        >
          <div
            className={`w-4 h-4 rounded-full border   border-black ${
              props.mode
                ? "translate-x-0 duration-100 bg-white"
                : " bg-black translate-x-0.5 duration-50"
            }`}
          ></div>
        </div>
        <p className={props.mode ? "text-gray-400" : "text-white"}>Dark</p>
      </div>
    </div>
  );
}
