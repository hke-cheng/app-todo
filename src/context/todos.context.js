//todos
//all methods to interact with todos. add, remove, edit

import React, { createContext, useReducer } from "react";
// import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer.js";


const defaultTodos = [
  { id: 1, task: "Default task 1", completed: false },
  { id: 2, task: "Default task 2", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {

  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={ dispatch }>{props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
    
  )
}