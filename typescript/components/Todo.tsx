import { Button, Checkbox, FormControl,  TableCell,  TableRow, TextField } from "@mui/material";
import { useState } from "react";

const Todo = (props: any) => {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState('');

  const handleChange = (event: any) => {
    setNewName(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <FormControl onSubmit={handleSubmit}>
        <TableRow>
            <TableCell><TextField id="outlined-basic" label="New name" variant="outlined" type="text" value={newName} onChange={handleChange} /></TableCell>
            <TableCell><Button variant="contained" color='success' type="button" onClick={handleSubmit} >Save</Button></TableCell>
            <TableCell><Button variant="contained" color="error" type="button" onClick={()=>setEditing(false)}>Cancel</Button></TableCell>
        </TableRow>
    </FormControl>
    
    
  );
  const viewTemplate = (
    <div>       
        <TableCell>
            <Checkbox   
            
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
            
            /> 
        </TableCell>

        <TableCell><label >{props.name}</label></TableCell> 
        
        <TableCell><Button variant="contained" type="button" onClick={()=>setEditing(true)}>Edit </Button></TableCell>

        <TableCell><Button variant="contained" color="error" type="button" onClick={() => props.deleteTask(props.id)}>Delete </Button></TableCell>
        
    
    </div>
  );

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default Todo;
