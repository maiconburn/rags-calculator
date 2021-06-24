import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Index() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={modalStyle}
      className={classes.paper}
    >
      <p id="simple-modal-description">
        This will be used to divide your gas, electricity and car usage between
        each member of the household. If you are at University halls of
        residence, just 1.
      </p>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box
            my="2rem"
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4" align="center">
              How many people are there in your household? <br />
              <Button onClick={handleOpen}>
                <HelpOutlineIcon fontSize="small" /> Info
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="3rem">
            <ButtonIncrementDecrement start={1} variable="peopleHousehold" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={0}
            nextStep="houseInfo"
            previousStep="/"
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
