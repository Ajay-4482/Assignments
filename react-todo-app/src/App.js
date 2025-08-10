
import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, {text: task, completed: false}]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <div className='todo-box'>
        <h1>📝 My Todo List</h1>
        <div className='input-section'>
          <input type='text' placeholder="What needs to be done?" value={task} onChange={(e) => setTask(e.target.value)} />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="todo-list">
          {todos.map((todo,index) => (
              <TodoItem key={index} todo={todo} onToggle={() => toggleComplete(index)} onDelete={() =>deleteTodo(index) }></TodoItem>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
