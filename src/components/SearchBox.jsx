import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ handleQueryTerm, error, setError }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <form className="bg-white dark:bg-blue shadow-stone-400 shadow-lg dark:shadow-none pl-5 pr-2 py-2 flex gap-5 justify-between items-center rounded-xl text-white">
        <div className="flex justify-center items-center gap-3 w-full">
          <BsSearch className="text-blueLight text-xl" />
          <input
            type="text"
            value={value}
            className="bg-white dark:bg-blue text-black dark:text-white outline-none text-sm w-full"
            placeholder="Search GitHub username..."
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn-blue hover:shadow-lg hover:shadow-red-600/40"
          onClick={(e) => {
            e.preventDefault();
            if (value) {
              handleQueryTerm(value);
              setError("");
            } else {
              setError("Enter A userName");
            }
          }}
        >
          Search
        </button>
      </form>
      {error && <div className="text-red-600 text-sm -mt-3">{error}</div>}
    </>
  );
};

export default SearchBox;
