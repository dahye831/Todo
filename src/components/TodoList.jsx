import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(getLocalData());

  //투두 아이템 추가
  const handleAdd = (todo) => {
    const id = Date.now();
    const value = todo;
    const status = "active";
    setTodos((prev) => [...prev, { id, value, status }]);
  };
  //투두 아이템 삭제
  const handleDelete = (deleted) => {
    setTodos(todos.filter((item) => item.id !== deleted));
  };
  //투두 아이템 업데이트
  const handleUpdate = (updated) => {
    setTodos(
      todos.map((item) => {
        if (item.id === updated) {
          item.status !== "active"
            ? (item.status = "active")
            : (item.status = "completed");
        }
        return item;
      })
    );
  };
  //filter된 데이터
  const filteredList = getFilterData(filter, todos);
  //todo가 추가될때마다 localStorage를 업데이트해준다.
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <ul className="todoList">
        {filteredList.map((item, index) => (
          <TodoItem
            key={`todo-${index}`}
            id={item.id}
            todo={item.value}
            status={item.status}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <TodoInput onAdd={handleAdd} />
    </>
  );
};

export default TodoList;

function getFilterData(filter, todos) {
  if (filter === "all") {
    return todos;
  } else {
    return todos.filter((todo) => todo.status === filter);
  }
}

function getLocalData() {
  const getLocalStorage = localStorage.getItem("todoList");
  return !!getLocalStorage ? JSON.parse(getLocalStorage) : [];
}
