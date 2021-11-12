import { useState } from "react";
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  const recordTodo = () => {
    setTodoList([...todolist, todo]);
    setTodo("");
  }

  const Todo = ({ text }) => {
    const [done, setDone] = useState(false);
    return (
      <label className="todo">
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} className="todo-check" />
        <span className="todo-text" style={done ? { textDecoration: 'line-through' } : {}}>{text}</span>
      </label>
    )
  }

  return (
    <div className="App">
      <h1>Tareas con React</h1>
      <div className="input-todo">
        <input className="input" type="text" value={todo} onChange={e => setTodo(e.target.value)} onKeyPress={e => (e.key === 'Enter') && recordTodo()} placeholder="Introduce la tarea" />
        <button className="submit" onClick={recordTodo}>Enviar</button>
      </div>
      <div className="todo-header">
        <span className="todo-header-text">Lista de tareas</span>
      </div>
      <div className="todo-list">
        {todolist.map((todo, k) => <Todo text={todo} key={k} />)}
      </div>
    </div>
  );
}

export default App;
