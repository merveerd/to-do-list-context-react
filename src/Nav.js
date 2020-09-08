import React, { useContext } from "react";
import {TodoContext} from './TodoContext'

const Nav = () => {
  const [todos, setTodos] = useContext(TodoContext);
  return (
    <nav>
      <h3> Dev Mer</h3>
      <p>List of Todos: {todos.length} </p>
    </nav>
  );
};


export default Nav