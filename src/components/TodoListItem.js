import React from "react";
import { useTodos } from "../context/TodoContext";

function TodoListItem({ todo }) {
  const { todos, setTodos } = useTodos();

  const changeCompleted = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    setTodos([...todos]);
  };

  const deleteTodo = (id) => {
    const undeletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...undeletedTodos]);
  };

  return (
    <li className={todo.completed === true ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => changeCompleted(todo.id)} />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
      </div>
    </li>
  );
}

export default TodoListItem;
