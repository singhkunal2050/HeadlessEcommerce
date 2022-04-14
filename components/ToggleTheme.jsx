import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";

function ToggleTheme() {
  return (
    <button className="flex gap-2 items-center justify-center">
      {true ? <HiMoon size={25} /> : <HiSun size={25} />}
    </button>
  );
}

export default ToggleTheme;
