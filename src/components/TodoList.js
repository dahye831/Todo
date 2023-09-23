import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearchResult = () => {
    return search === '' ? todo : todo.filter((item) => item.content.includes(search))
  }
  return (
    <section className="todoList">
      <h2 className="todoList__title">Todo List</h2>
      <input
        type="text"
        value={search}
        placeholder="검색어를 입력하세요"
        className="todoList__search"
        onChange={onChangeSearch}
      />
      <div className="todoList__list">
        {getSearchResult().map((item) => (
          <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}

export default TodoList