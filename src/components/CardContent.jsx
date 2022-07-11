import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Card from "./Card";
import ThemeContent from "./ThemeContent";

const API_URL = "https://api.github.com/users/";

const CardContent = () => {
  const [queryTerm, setQueryTerm] = useState("octocat");
  const [dataUser, setDataUser] = useState();
  const [error, setError] = useState("");

  const handleQueryTerm = (data) => {
    setQueryTerm(data);
  };

  useEffect(() => {
    if (queryTerm) {
      console.log(queryTerm);
      fetch(API_URL + queryTerm)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            setError("User Not Found");
          } else {
            setDataUser(data);
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [queryTerm]);

  return (
    <div className="flex flex-col gap-5 w-full sm:w-[29rem] md:w-[33rem] lg:w-[40rem] px-5">
      <ThemeContent />
      <SearchBox
        handleQueryTerm={handleQueryTerm}
        error={error}
        setError={setError}
      />
      <Card dataUser={dataUser} />
    </div>
  );
};

export default CardContent;
