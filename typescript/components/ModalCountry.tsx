import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia, Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const imgStyle = {
  width: "50%",
  height: "50%",
};
const grid = {
  display: "flex",
  " flex-direction": "row",
  
};

export default function ModalCountry(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        More Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography gutterBottom variant="h4" component="div">
            {props.item.name.common}
          </Typography>

          <Grid sx={grid} >
            <CardMedia
              component="img"
              image={props.item.flags.png}
              alt="flag"
              sx={imgStyle}
            />
            <CardMedia
              component="img"
              image={props.item.coatOfArms.png}
              alt="flag"
              sx={{
                width: "30%",
                height: "30%",
              }}
            />
          </Grid>
          <Typography variant="body1">
            <strong> Official Name: </strong>
            {props.item.name.official}
          </Typography>
          <Typography variant="body1">
            <strong> Capital: </strong>
            {props.item.capital}
          </Typography>
          <Typography variant="body1">
            <strong> Region: </strong>
            {props.item.region}
          </Typography>
          <Typography variant="body1">
            <strong> Area: </strong>
            {props.item.area}
          </Typography>
          <Typography variant="body1">
            <strong> Population: </strong>
            {props.item.population}
          </Typography>
          <Typography variant="body1">
            <strong> Timezones: </strong>
            {props.item.timezones.map((timezone) => (
              <span>{timezone} </span>
            ))}{" "}
          </Typography>
          <Typography variant="body1">
            <strong> Continents: </strong>
            {props.item.continents.map((continent) => (
              <span>{continent} </span>
            ))}{" "}
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
