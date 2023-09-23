
import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(0)
  //생성
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isChecked: false,
      createdDate:new Date().getTime()
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1
  }
  //업데이트
  const onUpdate = (targetId) => {
    setTodo(todo.map((item) => (
      item.id === targetId ? {...item, isChecked: !item.isChecked} : item
    )))
  }
  //삭제하기
  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId))
  }

  return (
    <div className="App">
      <main>
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      </main>
    </div>
  );
}

export default App;
