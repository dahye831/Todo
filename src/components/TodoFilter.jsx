import React, { useState } from "react";

export default function TodoFilter({ filter, filters, onFilter }) {
  const [selected, setSelected] = useState(filter);
  return (
    <ul className="filterList">
      {filters.map((value, index) => (
        <li
          className={`filterItem ${selected === value && "filterItem--on"}`}
          key={index}
        >
          <button
            className="filterItem__button"
            onClick={() => {
              onFilter(value);
              setSelected(value);
            }}
            aria-selected={selected === value}
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
}
