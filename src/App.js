
import { useReducer, useRef} from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state];
    case "UPDATED": {
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isChecked: !item.isChecked }
          : item
      );
    }
    case 'DELETE': {
      return state.filter((item) => item.id !== action.targetId)
    }
  }
  return state
}

function App() {
  const [todo, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)

  //생성
  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      newItem: {
        id: idRef.current,
        content,
        isChecked: false,
        createdDate: new Date().getTime()
      }
    })
    idRef.current += 1
  }
  //업데이트
  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATED',
      targetId
    })
  }
  //삭제하기
  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId
    })
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
