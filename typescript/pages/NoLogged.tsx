import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const NoLogged = () => {
  return (
    <div>
        <Container>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            Please Log In
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default NoLogged