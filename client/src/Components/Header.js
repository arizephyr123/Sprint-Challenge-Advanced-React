import React from "react";
import { useDarkMode } from "./Hooks/useDarkMode";

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode("Dark Mode", "false");

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

  return (
    <>
      <h2>
        Women's World Cup players ranked in search interest <br></br>June-July
        2019
      </h2>
      <div>
      <button onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>Dark Mode On/Off</button>
      </div>
    </>
  );
};

export default Header;
