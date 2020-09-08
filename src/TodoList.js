import React, { useState, useContext, useEffect } from "react";
import Todo from "./Todo";

import { TodoContext } from './TodoContext'

const TodoList = () => {
  
const [todos, setTodos] = useContext(TodoContext);
  return (
    <div>
      {todos.map(todo => (
        <Todo title={todo.title} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
