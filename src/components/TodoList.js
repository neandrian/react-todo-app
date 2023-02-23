import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";

import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { todos, setTodos, activeFilter } = useTodos();
  const [filteredTodos, setFilteredTodos] = useState([]);

  const hasActiveTodo = todos.some((todo) => todo.completed === false);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else {
      const items = todos.filter((todo) => {
        return activeFilter === "active" ? todo.completed === false : todo.completed === true;
      });
      setFilteredTodos(items);
    }
  }, [activeFilter, todos]);

  const handleToggleAll = () => {
    todos.forEach((todo) => {
      hasActiveTodo ? (todo.completed = true) : (todo.completed = false);
    });
    setTodos([...todos]);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" checked={!hasActiveTodo} onChange={() => console.log()} />
      <label htmlFor="toggle-all" onClick={() => handleToggleAll()}>
        Mark all as complete
      </label>

      <ul className="todo-list">{filteredTodos && filteredTodos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}</ul>
    </section>
  );
}

export default TodoList;
