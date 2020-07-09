import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";

function EditTodoForm({ task, id, toggleisEditing }) {
  const [value, handleChange] = useInputState(`${task}`)
  const { dispatch } = useContext(TodosContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        toggleisEditing()
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >

      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      />

    </form>
  )
}

export default EditTodoForm;