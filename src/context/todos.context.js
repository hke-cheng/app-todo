//todos
//all methods to interact with todos. add, remove, edit

import React, { createContext, useReducer } from "react";
import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer.js";


const defaultTodos = [
  { id: 1, task: "Default task 1", completed: false },
  { id: 2, task: "Default task 2", completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  // OLD VERSION
  // const todoStuff = useTodoState(defaultTodos); 

  const [todos, dispatch] =useReducer(todoReducer, defaultTodos);


  return (
    <TodosContext.Provider value={{todos,dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}