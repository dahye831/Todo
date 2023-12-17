import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    onAdd(value)
    setValue('')
  };
  return (
    <div>
      <input
        type="text"
        className="todoInput__input"
        onChange={handleChange}
        value={value}
      />
      <button className="todoInput__button" type="submit" onClick={handleClick}>
        입력
      </button>
    </div>
  );
};

export default TodoInput;