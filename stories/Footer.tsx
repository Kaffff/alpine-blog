import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="p-6 w-full bg-zinc-800 border-t border-zinc-700">
      <div className="flex gap-5 justify-center items-center">
        <Image
          className="rounded-full"
          src="/test_mountain.jpeg"
          width="70"
          height="70"
          objectFit="cover"
          alt="picture of mountain"
        />
        <div className="flex flex-col">
          <div className=" text-xl">botta</div>
          <div className="text-sm text-zinc-300">
            <p>秩父、飯能にたまに出没します。</p>
            <p>好きな山・・・天覧山、日和田山(飯能)、谷川岳</p>
            <p>最近は雪山も始めました。</p>
          </div>
        </div>
      </div>
      <div className="text-zinc-400 text-center pt-10">botta alpinist blog</div>
    </footer>
  );
};
