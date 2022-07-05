import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Card from "./Card";
import ThemeContent from "./ThemeContent";

const API_URL = "https://api.github.com/users/";

const CardContent = () => {
  const [queryTerm, setQueryTerm] = useState("christianlazo2020");
  const [dataUser, setDataUser] = useState();

  const handleQueryTerm = (data) => {
    setQueryTerm(data);
  };

  useEffect(() => {
    console.log(queryTerm);
    fetch(API_URL + queryTerm)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setDataUser(data);
      });
  }, [queryTerm]);

  return (
    <div className="flex flex-col gap-5 sm:w-[29rem] md:w-[33rem] lg:w-[40rem] px-5">
      <ThemeContent />
      <SearchBox handleQueryTerm={handleQueryTerm} />
      <Card dataUser={dataUser} />
    </div>
  );
};

export default CardContent;
