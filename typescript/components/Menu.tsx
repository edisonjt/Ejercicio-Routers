import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';



const Menu = () => {

  const[user, setUser] = useState({
    username: '',
    name: '',
    password: '',
  })
 
  useEffect(() =>{
    const loggedUserJSON = window.localStorage.getItem('loggedEjercicioUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      console.log(user);
    }
  },[])

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
            <TwoWheelerIcon/>
          </IconButton>
          <Typography variant='h6' component='div' sx={{flexGrow:1}} >
            EJERCICIOS ROUTE
          </Typography>
          <Stack direction='row' spacing={2} >
            <Button variant='text' color='inherit' ><Link to='/'>Login</Link></Button>
            <Button variant='text' color='inherit' ><Link to='/todo-list'>TODO list</Link></Button>
            <Button variant='text' color='inherit' ><Link to='/countries'>Countries API</Link></Button>
            {
              user
              ? <Button varient='text' color='inherit' >Logged as {user.name}</Button>
              : <Button varient='text' color='inherit' >No logged</Button> 
              
            }
          </Stack>
        </Toolbar>

      </AppBar>
        
        
        
    </>
  )
}

export default Menu