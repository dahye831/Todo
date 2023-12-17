import React from 'react';

const TodoItem = ({ id, todo, status, onUpdate, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };
  const handleChecked = () => {
    onUpdate(id)
  }
  return (
    <li className="todoItem">
      <div className="todoItem__box">
        <input type="checkbox" id={id} checked={status === 'completed'} onChange={handleChecked } />
        <label htmlFor={id}>{todo}</label>
      </div>
      <button className="todoItem__button-delete" onClick={handleClick}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;