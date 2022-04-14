import { createContext, useState } from "react";
import { useEffect } from "react";

export const ThemeContext = createContext("default");

export const ThemeProvider = (props) => {
  let [theme, setTheme] = useState("default");

  useEffect(() => {
    if (
      localStorage.getItem("theme") == "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  },[]);

  const toggleTheme = () => {
    if (
      theme != "dark") {
      console.log("theme was light and changing to dark");
      localStorage.theme = "dark";
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("theme was dark and changing to light");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  let themeStore = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeStore}>
      {props.children}
    </ThemeContext.Provider>
  );
};
