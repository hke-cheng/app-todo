import React, { useEffect } from 'react';
import useTodoState from "./hooks/useTodoState";
import useLocalStorageState from "./hooks/useLocalStorageState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from './context/todos.context';


function TodoApp(props) {

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">
            TODOS WITH HOOKS
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: "48px" }}>
        <Grid item xs={11} md={8} lg={4}>

          <TodosProvider>
            <TodoForm />
            <TodoList/>
          </TodosProvider>

        </Grid>

      </Grid>
    </Paper>
  )
}

export default TodoApp;



// - TodoApp
//   -TodoForm
//     -TodoList
//       -TodoItem