import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
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

export default function Cars() {
  const classes = useStyles();
  const [CarsMileage, setCarsMileage] = React.useState();
  const [validationPass, setValidationPass] = React.useState(false);
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

  const handleCarsMileage = (event, newCarsMileage) => {
    setCarsMileage(newCarsMileage);
  };

  React.useEffect(() => {
    window.localStorage.setItem("CarsMileage", CarsMileage);
    if (CarsMileage != null) {
      setValidationPass(true);
    }
  }, [CarsMileage, validationPass]);

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
          Don’t include any miles you travel while at work in your input, this
          will be covered as business miles in your company's footprint.
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
              How many cars are used by your household?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <ButtonIncrementDecrement start={0} variable="Cars" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              What is the average mileage for your cars?
              <br />
              <Button onClick={handleOpenModal1}>
                <HelpOutlineIcon fontSize="small" /> Info
              </Button>
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={CarsMileage}
              exclusive
              onChange={handleCarsMileage}
              aria-label="Cars Mileage"
            >
              <ToggleButton value="C-low" size="large" aria-label="Very little">
                <span>Up to 5,000 miles</span>
              </ToggleButton>
              <ToggleButton value="C-average" size="large" aria-label="Average">
                <span>5,000–10,000 miles</span>
              </ToggleButton>
              <ToggleButton
                value="C-above"
                size="large"
                aria-label="Above average"
              >
                <span>More than 10,000 miles</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={4}
            validation={validationPass}
            nextStep="publicTransport"
            previousStep="recycle"
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
