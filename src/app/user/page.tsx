'use client'
import React from "react";
import Pink from 'next/link';
export default function page() {
  return (
    <section className="flex font-medium items-center justify-center h-screen">
      <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between"></div>
        <div className="">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            Jonathan <br /> Smith
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">Active</p>
        <button className="text-white bg-green-400 p-0.5 my-2 rounded-md px-2 mt-3 outline-none hover:bg-green-500"><Pink href={'/user/tweets'}>check tweet</Pink></button>
      </section>
    </section>
  );
}
