import React from 'react';

export default function TodoFilter({ filters, onFilter }) {

  return (
    <ul className="filterList">
      {filters.map((value, index) => (
        <li className="filterItem" key={index}>
          <button
            className="filterItem__button"
            onClick={() => onFilter(value)}
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
}

