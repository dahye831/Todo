import React, { useContext } from "react";
import TodoFilter from "./TodoFilter";
import { DarkModeContext } from "../context/DarkModeContext";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Header({ filter, filters, onFilter }) {
  const { dark, handleMode } = useContext(DarkModeContext);

  return (
    <header className="header">
      <button
        className={`header__button-mode ${dark && "header__button-mode-dark"}`}
        onClick={handleMode}
      >
        {dark ? <IoSunnyOutline /> : <IoMoonOutline />}
      </button>
      <TodoFilter filter={filter} filters={filters} onFilter={onFilter} />
    </header>
  );
}
