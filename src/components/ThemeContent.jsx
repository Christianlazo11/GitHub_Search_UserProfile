import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import useGlobalData from "../hooks/useGlobalData";

const ThemeContent = () => {
  const { theme, handleTheme } = useGlobalData();
  return (
    <div className="py-5 rounded-xl text-white flex flex-row justify-between text-black dark:text-white">
      <p>Devfinder</p>
      <button
        className="flex gap-2 items-center"
        onClick={() => {
          handleTheme();
        }}
      >
        {theme === "light" ? (
          <>
            LIGHT <MdLightMode />
          </>
        ) : (
          <>
            DARK <FaMoon />
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeContent;
