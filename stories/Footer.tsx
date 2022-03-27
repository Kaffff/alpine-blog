import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 px-6 py-6 border-t border-gray-700 ">
      <div className="flex gap-5 items-center justify-center">
        <Image
          className="rounded-full"
          src="/test_mountain.jpeg"
          width="70%"
          height="70%"
          objectFit="cover"
          alt="picture of mountain"
        />
        <div className="flex flex-col">
          <div className="text-white text-xl">botta</div>
          <div className="text-gray-300 text-sm">
            <p>秩父、飯能にたまに出没します。</p>
            <p>好きな山・・・天覧山、日和田山(飯能)、谷川岳</p>
            <p>最近は雪山も始めました。</p>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-center pt-10">botta alpinist blog</div>
    </footer>
  );
};
