import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const handleMode = () => {
    setDark(prev => !prev);
    setDarkMode(dark);
  }
  return <DarkModeContext.Provider value={{dark, handleMode}}>{children}</DarkModeContext.Provider>;
};

function setDarkMode(mode) {
  if (!mode) {
    document.querySelector(".main").classList.add("darkMode");
  } else {
    document.querySelector(".main").classList.remove("darkMode");
  }
}