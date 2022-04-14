import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";

function ToggleTheme() {
  return (
    <button className="flex gap-2 items-center justify-center">
      <HiMoon size={20} /> <HiSun size={20} />
    </button>
  );
}

export default ToggleTheme;
