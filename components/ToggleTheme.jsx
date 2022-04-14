import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function ToggleTheme() {
  const { theme , toggleTheme}  = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="flex gap-2 items-center justify-center">
      {theme!="dark" ? <HiMoon size={25} /> : <HiSun size={25} />}
    </button>
  );
}

export default ToggleTheme;
