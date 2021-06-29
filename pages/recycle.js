import React from "react";
import NavBar from "../components/NavBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
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

export default function Recycle() {
  const classes = useStyles();
  const [RecycleMix, setRecycleMix] = React.useState();
  const [RecyclePlastic, setRecyclePlastic] = React.useState();
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
          Increasing the lifecycle of materials will result in less CO2
          emissions, rather than producing new materials each time a product is
          manufactured.
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
          Increasing the lifecycle of materials will result in less CO2
          emissions, rather than producing new materials each time a product is
          manufactured.
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </Grid>
  );

  const handleRecycleMix = (event, newRecycleMix) => {
    setRecycleMix(newRecycleMix);
  };
  const handleRecyclePlastic = (event, newRecyclePlastic) => {
    setRecyclePlastic(newRecyclePlastic);
  };

  React.useEffect(() => {
    window.localStorage.setItem("RecycleMix", RecycleMix);
    window.localStorage.setItem("RecyclePlastic", RecyclePlastic);
    if (RecycleMix != null && RecyclePlastic != null) {
      setValidationPass(true);
    }
  }, [RecycleMix, RecyclePlastic, validationPass]);

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              Do you recycle paper, glass and metal?
              <Button onClick={handleOpenModal1}>
                <HelpOutlineIcon fontSize="small" />
              </Button>
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={RecycleMix}
              exclusive
              onChange={handleRecycleMix}
              aria-label="Recycle Mix"
            >
              <ToggleButton value="RM-yes" size="large" aria-label="Yes">
                <span>Yes</span>
              </ToggleButton>
              <ToggleButton value="RM-no" size="large" aria-label="No">
                <span>No</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              Do you recycle plastic?
              <Button onClick={handleOpenModal2}>
                <HelpOutlineIcon fontSize="small" />
              </Button>
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={RecyclePlastic}
              exclusive
              onChange={handleRecyclePlastic}
              aria-label="Recycle Plastic"
            >
              <ToggleButton value="RP-yes" size="large" aria-label="Yes">
                <span>Yes</span>
              </ToggleButton>
              <ToggleButton value="RP-no" size="large" aria-label="No">
                <span>No</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={3}
            validation={validationPass}
            nextStep="cars"
            previousStep="food"
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
