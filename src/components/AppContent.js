import React from "react";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function AppContent() {
  return (
    <section className="todoapp">
      <TodoHeader />

      <TodoList />

      <TodoFooter />
    </section>
  );
}

export default AppContent;
