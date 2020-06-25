import React from 'react';
import useToggleState from "./hooks/useToggleState";

import EditTodoForm from "./EditTodoForm";

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";

import DeletIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import { IconButton } from '@material-ui/core';

function Todo({ task, completed, removeTodo, id, toggleTodo,editTodo }) {

  const [isEditing, toggleisEditing] = useToggleState(false);


  return (
    <ListItem style={{height:"64px"}}>
      {isEditing ? <EditTodoForm task={task} id={id} editTodo={editTodo} toggleisEditing={toggleisEditing}/> :
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}> {task} </ListItemText>

          <ListItemSecondaryAction>

            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeletIcon />
            </IconButton>


            <IconButton aria-label="Edit" onClick={toggleisEditing}>
              <EditIcon />
            </IconButton>

          </ListItemSecondaryAction>
        </>

      }


    </ListItem>
  )
}

export default Todo;