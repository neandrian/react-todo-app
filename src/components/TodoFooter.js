import React from "react";

import { useTodos } from "../context/TodoContext";

function TodoFooter() {
  const { todos, setTodos, activeFilter, setActiveFilter } = useTodos();

  const countCompletedTodos = todos.filter((todo) => !todo.completed).length;
  const hasCompletedTodos = todos.some((todo) => todo.completed === true);

  const handleClearCompleted = () => {
    const undeletedTodos = todos.filter((todo) => todo.completed === false);
    setTodos([...undeletedTodos]);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{countCompletedTodos} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={activeFilter === "all" ? "selected" : ""} onClick={() => setActiveFilter("all")}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === "active" ? "selected" : ""} onClick={() => setActiveFilter("active")}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === "completed" ? "selected" : ""} onClick={() => setActiveFilter("completed")}>
            Completed
          </a>
        </li>
      </ul>
      {hasCompletedTodos && (
        <button className="clear-completed" onClick={() => handleClearCompleted()}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default TodoFooter;
