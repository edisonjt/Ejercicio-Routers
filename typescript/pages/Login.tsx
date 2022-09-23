import React, { useState } from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl } from "@mui/material";
import users from '../users.json'
import { Userinfo } from '../types/Userinfo';


const theme = createTheme();


export default function Login() {

  const [user, setUser] = useState({
    username: '',
    name: '',
    password: '',
  })

  const handleSubmit = (event: any) => {
    event.preventDefault();
  
    const data = new FormData(event.currentTarget);

    const userlog: Userinfo | undefined = users.find(user => user.username===data.get("username"))
    const passlog: Userinfo | undefined = users.find(user => user.password===data.get("password"))

    if(userlog&& passlog){
      setUser(userlog)
      window.localStorage.setItem(
        'loggedEjercicioUser', JSON.stringify(userlog)
      )
    }else{
      alert('incorrect data')
    }
  };

  if(user.name!=''){
    return <Box
    sx={{
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography gutterBottom variant="h3" component="div">
      Welcome {user.name}
    </Typography>
  </Box>
  }

  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="div" variant="h4">
            Log In
          </Typography>
          <FormControl>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
          </FormControl>
        </Box>
      </Container>
    </ThemeProvider>
  );

}
