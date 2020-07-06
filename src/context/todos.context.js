//todos
//all methods to interact with todos. add, remove, edit

import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Default task 1", completed: false },
  { id: 2, task: "Default task 2", completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  // const [todos, addTodo, removeTodo, toggleTodo, editTodo] = useTodoState(defaultTodos);
  const todoStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}