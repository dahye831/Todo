import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const TodoList = ({ filter }) => {
  // useState
  // const [state, setState] = useState(initialValue) initialValue에 콜백함수가 오기도 함
  // useState(readTodoData()) 함수호출을 초기값으로 넣으면, TodoList가 렌더될때마다 호출됨
  const [todos, setTodos] = useState(readTodoData);

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

function readTodoData() {
  const todoList = localStorage.getItem("todoList");
  return !!todoList ? JSON.parse(todoList) : [];
}
