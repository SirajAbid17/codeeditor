import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-3 bg-[#0c1114] text-white text-center border-t border-white/10 flex justify-center items-center flex-col fixed bottom-0 left-0 right-0 z-[1000]">
      <h3 className="text-lg md:text-xl m-0">
        Developed by:{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
          Siraj Abid
        </span>
      </h3>
    </footer>
  );
}
