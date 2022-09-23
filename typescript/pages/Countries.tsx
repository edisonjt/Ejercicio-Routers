import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Country from "../components/Country";
import { useFetch } from "../hooks/useFetch";

const Countries = () => {
  const { data, isLoading } = useFetch(`https://restcountries.com/v3.1/all`);
  console.log(data);

  return (
    <>
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
            World Countries Data
          </Typography>
          <Grid container spacing={4}>
            {isLoading ? <p>Loading...</p> : <Country countries={data} />}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Countries;
