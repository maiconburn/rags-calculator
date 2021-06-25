import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Slider from "../components/Slider";
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

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 400,
    label: "400",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 600,
    label: "600",
  },
  {
    value: 700,
    label: "700",
  },
  {
    value: 800,
    label: "800",
  },
  {
    value: 900,
    label: "900",
  },
  {
    value: 1000,
    label: "1000",
  },
];

export default function PublicTransport() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [modalBody, setModalBody] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleOpenModal1 = () => {
    setModalBody(body1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body1 = (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
      style={modalStyle}
      className={classes.paper}
    >
      <Grid item>
        <Typography
          variant="body1"
          align="center"
          id="simple-modal-description"
        >
          This includes any bus or train miles travelled. We will use your
          weekly average to estimate your year's travel emissions.
        </Typography>
      </Grid>

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
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How many miles do you travel on public transport weekly?
              <br />
              <Button onClick={handleOpenModal1}>
                <HelpOutlineIcon fontSize="small" /> Info
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="1rem">
            <Slider
              variable="PublicTransport"
              marks={marks}
              max={1000}
              step={25}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={5}
            nextStep="flights"
            validation={true}
            previousStep="cars"
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>{modalBody}</>
      </Modal>
    </div>
  );
}
