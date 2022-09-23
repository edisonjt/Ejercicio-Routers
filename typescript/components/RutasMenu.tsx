import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Countries from '../pages/Countries'
import Login from '../pages/Login'
import NoLogged from '../pages/NoLogged'
import ToDoList from '../pages/ToDoList'
import Menu from './Menu'


const RutasMenu = () => {

  const[user, setUser] = useState(null)
 
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
        <Router>
            <Menu />
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/todo-list' render={()=>
                  {
                    return user ? <ToDoList /> : <Redirect to='/no-logged' />
                  }}
                />
                <Route exact path='/countries' render={()=>
                  {
                    return user ? <Countries /> : <Redirect to='/no-logged' />
                  }}
                />
                <Route exact path='/no-logged' component={NoLogged}/>
                
                
            </Switch>
        </Router>
    </>
  )
}

export default RutasMenu