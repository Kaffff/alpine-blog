import React from "react";
import { Footer } from "../stories/Footer";
import { Header } from "../stories/Header";

const history = () => {
  return (
    <div className="flex flex-col h-full min-h-screen font-shippori">
      <Header />
      <main className="grow place-self-center px-6 pt-14 pb-32 max-w-7xl bg-gray-900">
        <div className="text-4xl text-white">登山年表</div>
        <div className="pt-64 text-4xl text-white">製作途中</div>
      </main>
      <Footer />
    </div>
  );
};

export default history;
