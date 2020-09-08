import React from "react";
import TodoList from "./TodoList";
import Nav from "./Nav";

import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Nav />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
