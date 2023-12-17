import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0])

  return (
    <div className="App">
      <main>
        <Header filters={filters} onFilter={setFilter} />
        <TodoList filter={filter} />
      </main>
    </div>
  );
}

export default App;
