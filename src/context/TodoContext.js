import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn react",
      completed: true,
    },
    {
      id: 2,
      text: "Learn nodejs",
      completed: false,
    },
    {
      id: 3,
      text: "Learn redux",
      completed: false,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");

  const values = {
    todos,
    setTodos,
    activeFilter,
    setActiveFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodos = () => useContext(TodoContext);
