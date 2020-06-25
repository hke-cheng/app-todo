import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ task, editTodo, id, toggleisEditing }) {
  const [value, handleChange] = useInputState(`${task}`)
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        toggleisEditing()
      }}
      style={{marginLeft:"1rem", width:"50%"}}
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