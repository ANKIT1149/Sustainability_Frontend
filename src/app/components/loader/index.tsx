// components/Loader.tsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-red-900 rounded-full animate-spin absolute z-[8]"></div>
        {/* Inner Ring */}
        <div className="w-12 h-12 border-4 border-blue-800 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
