import "./App.css";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";

import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppContent />

      <AppFooter />
    </TodoProvider>
  );
}

export default App;
