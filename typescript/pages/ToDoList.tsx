import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import data from '../data.json'
import { Box, Table, TableBody,  TableContainer,  TableRow, Typography } from '@mui/material';

const ToDoList = () => {

  const [tasks, setTasks] = useState(data)

  const addTask = (name: string) => {
    const newTask = {
      id:`todo-${nanoid()}`, 
      name, 
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  const toggleTaskCompleted = (id: string) =>{
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {        
        return {...task, completed: !task.completed}
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const deleteTask = (id: string) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  console.log(tasks)
  
  const taskList = tasks.map(task =>
 
    <TableRow key={task.id}>
      <Todo     
        id={task.id}
        name={task.name} 
        completed={task.completed} 
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
        />
    </TableRow>
    
     
  )

  const tasksNoun = taskList.length !== 1 ? 'Tasks' : 'Task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  
  return (
    <>
      
      <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <Typography gutterBottom variant="h3" component="div">Todo List</Typography>     
        <Typography gutterBottom variant="h5" component="div" id="list-heading">{headingText}</Typography>
        <TodoForm addTask={addTask}/>  
        <TableContainer>
          <Table >
            
            <TableBody>
              {taskList}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    
    </>
  );
}

export default ToDoList


/* BOTONES FILTRO

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div> */