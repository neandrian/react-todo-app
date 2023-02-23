import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoHeader() {
  const [text, setText] = useState("");
  const { todos, setTodos } = useTodos();

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (text !== "") {
      const newTodo = { id: new Date().getTime(), text, completed: false };
      setTodos([...todos, newTodo]);
      setText("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleNewTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus />
      </form>
    </header>
  );
}

export default TodoHeader;
