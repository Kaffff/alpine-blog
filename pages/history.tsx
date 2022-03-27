import React from "react";
import { Footer } from "../stories/Footer";
import { Header } from "../stories/Header";

const history = () => {
  return (
    <div className="h-full flex flex-col min-h-screen font-shippori">
      <Header />
      <main className="flex-grow bg-gray-900 place-self-center max-w-7xl px-6 pt-14 pb-32">
        <div className="text-white text-4xl">登山年表</div>
        <div className="text-white text-4xl pt-64">製作途中</div>
      </main>
      <Footer />
    </div>
  );
};

export default history;
