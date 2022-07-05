import React from "react";
import { MdLightMode } from "react-icons/md";

const ThemeContent = () => {
  return (
    <div className="py-5 rounded-xl text-white flex flex-row justify-between">
      <p>Devfinder</p>
      <button className="flex gap-2 items-center">
        LIGHT <MdLightMode />
      </button>
    </div>
  );
};

export default ThemeContent;
