import React from "react";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/HouseInfo.module.scss";

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

export default function houseInfo() {
  const classes = useStyles();
  const [SourceEnergy, setSourceEnergy] = React.useState();
  const [HouseSize, setHouseSize] = React.useState();
  const [validationPass, setValidationPass] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [modalBody, setModalBody] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleOpenModal1 = () => {
    setModalBody(body1);
    setOpen(true);
  };

  const handleOpenModal2 = () => {
    setModalBody(body2);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSourceEnergy = (event, newSourceEnergy) => {
    setSourceEnergy(newSourceEnergy);
  };

  const handleHouseSize = (event, newHouseSize) => {
    setHouseSize(newHouseSize);
  };

  React.useEffect(() => {
    window.localStorage.setItem("SourceEnergy", SourceEnergy);
    window.localStorage.setItem("HouseSize", HouseSize);
    if (SourceEnergy != null && HouseSize != null) {
      setValidationPass(true);
    }
  }, [SourceEnergy, HouseSize, validationPass]);

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
          You produce greenhouse gas emissions when using electricity and gas in
          the home. We will estimate your electricity and gas output using the
          size of your home.
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </Grid>
  );

  const body2 = (
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
          We measure your estimated electricity and gas output by the number of
          // rooms in your home. (small = 1 bedroom, medium = 2–3 bedrooms,
          large = // 4+ bedrooms)
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
    <>
      <NavBar />
      <Grid container direction="column" alignItems="center" justify="center">
        <Box my="2rem">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h5" align="center">
                What energy sources do you have in your household?
                <br />
                <Button onClick={handleOpenModal1}>
                  <HelpOutlineIcon fontSize="small" /> Info
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my="2rem">
          <ToggleButtonGroup
            className={styles.toggleButtonGroup}
            value={SourceEnergy}
            exclusive
            onChange={handleSourceEnergy}
            aria-label="Source of energy"
          >
            <ToggleButton
              value="electricity"
              size="large"
              aria-label="Electricity"
            >
              Electricity
            </ToggleButton>
            <ToggleButton
              value="electricityGas"
              size="large"
              aria-label="Electricity + Gas"
            >
              Electricity + Gas
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box my="2rem">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h5" align="center">
                How big is your home?
                <br />
                <Button onClick={handleOpenModal2}>
                  <HelpOutlineIcon fontSize="small" /> Info
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my="2rem">
          <ToggleButtonGroup
            className={styles.toggleButtonGroup}
            value={HouseSize}
            exclusive
            onChange={handleHouseSize}
            aria-label="House size"
          >
            <ToggleButton value="small" size="large" aria-label="Small">
              <Grid container>
                <Grid item xs={12}>
                  Small
                </Grid>
                <Grid item xs={12} className={styles.buttonDescription}>
                  1 Bedroom
                </Grid>
              </Grid>
            </ToggleButton>

            <ToggleButton value="medium" size="large" aria-label="Medium">
              <Grid container>
                <Grid item xs={12}>
                  Medium
                </Grid>
                <Grid item xs={12} className={styles.buttonDescription}>
                  2–3 Bedrooms
                </Grid>
              </Grid>
            </ToggleButton>

            <ToggleButton value="large" size="large" aria-label="Large">
              <Grid container>
                <Grid item xs={12}>
                  Large
                </Grid>
                <Grid item xs={12} className={styles.buttonDescription}>
                  4+ Bedrooms
                </Grid>
              </Grid>
            </ToggleButton>

            <ToggleButton
              value={"halls"}
              size="large"
              aria-label="Halls of residence"
            >
              Halls of residence
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={1}
            validation={validationPass}
            nextStep="food"
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
        <>{modalBody}</>
      </Modal>
    </>
  );
}
