import React from 'react';
import TodoFilter from './TodoFilter';

export default function Header({ filters, onFilter }) {
  return (
    <header className="header">
      <button className="button-mode">dark mode</button>
      <TodoFilter filters={filters} onFilter={onFilter} />
    </header>
  );
}

