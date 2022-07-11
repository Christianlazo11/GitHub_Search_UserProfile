import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const saveTheme = () => {
    let data = localStorage.getItem("theme");
    if (data) {
      setTheme(data);
    } else {
      setTheme("light");
    }

    localStorage.setItem("theme", JSON.stringify(theme));
    handleTheme();
  };

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <GlobalContext.Provider value={{ theme, handleTheme, saveTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
