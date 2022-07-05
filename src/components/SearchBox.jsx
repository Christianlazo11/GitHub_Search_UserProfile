import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ handleQueryTerm }) => {
  const [value, setValue] = useState("");
  return (
    <div className="bg-blue pl-5 pr-2 py-2 flex gap-5 justify-between items-center rounded-xl text-white ">
      <div className="flex justify-center items-center gap-3 w-full">
        <BsSearch className="text-blueLight" />
        <input
          type="text"
          value={value}
          className="bg-blue outline-none text-sm w-full"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <button
        className="btn-blue"
        onClick={() => {
          handleQueryTerm(value);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;