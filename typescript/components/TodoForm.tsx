import { Button, FormControl, TableCell, TableRow, TextField } from "@mui/material";
import React, { useState } from "react";



const TodoForm = (props) => {
 
    const [name, setName] = useState('');
    
    const handleChange = (event) =>{
        setName(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(name.trim() !== ''){
            props.addTask(name);
            setName('')
        }
    }

  return (
    <>
      <FormControl onClick={handleSubmit}>
        <TableRow>
            <TableCell>   
                <TextField
                id="outlined-size-small" 
                size="small"
                label="New Todo" 
                variant="outlined"
                type="text"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
                />
            </TableCell> 
        <TableCell><Button variant="contained" type="submit">Add</Button></TableCell>
        </TableRow>
      </FormControl>
    </>
  );
};

export default TodoForm;
