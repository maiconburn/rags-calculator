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

export default function Food() {
  const classes = useStyles();
  const [OrganicFood, setOrganicFood] = React.useState();
  const [Meat, setMeat] = React.useState();
  const [FoodMiles, setFoodMiles] = React.useState();
  const [Waste, setWaste] = React.useState();
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

  const handleOpenModal3 = () => {
    setModalBody(body3);
    setOpen(true);
  };

  const handleOpenModal4 = () => {
    setModalBody(body4);
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
          Non-organic foods will output more carbon dioxide into the atmosphere.
          This is because the fertiliser used to grow non-organic foods requires
          manufacturing and transporting. There will also be an increase in
          greenhouse gases through the nitrous oxide released by the fertiliser.
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
          Meat and dairy consumption will increase methane in the atmosphere
          from the animals and slurry. Carbon dioxide emissions will also be
          higher from the machinery used to farm the animals.
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </Grid>
  );

  const body3 = (
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
          Less miles travelled by the food will mean less carbon dixoide is
          released during transport.
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </Grid>
  );

  const body4 = (
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
          Food that is put into landfill generates methane.
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </Grid>
  );

  const handleOrganicFood = (event, newOrganicFood) => {
    setOrganicFood(newOrganicFood);
  };
  const handleMeat = (event, newMeat) => {
    setMeat(newMeat);
  };
  const handleFoodMiles = (event, newFoodMiles) => {
    setFoodMiles(newFoodMiles);
  };
  const handleWaste = (event, newWaste) => {
    setWaste(newWaste);
  };

  React.useEffect(() => {
    window.localStorage.setItem("OrganicFood", OrganicFood);
    window.localStorage.setItem("Meat", Meat);
    window.localStorage.setItem("FoodMiles", FoodMiles);
    window.localStorage.setItem("Waste", Waste);
    if (
      OrganicFood != null &&
      Meat != null &&
      FoodMiles != null &&
      Waste != null
    ) {
      setValidationPass(true);
    }
  }, [OrganicFood, Meat, FoodMiles, Waste, validationPass]);

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of the food that you eat is organic?
              <br />
              <Button onClick={handleOpenModal1}>
                <HelpOutlineIcon fontSize="small" /> Info
              </Button>
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={OrganicFood}
              exclusive
              onChange={handleOrganicFood}
              aria-label="Organic Food"
            >
              <ToggleButton value="OF-none" size="large" aria-label="None">
                None
              </ToggleButton>
              <ToggleButton value="OF-some" size="large" aria-label="Some">
                Some
              </ToggleButton>
              <ToggleButton value="OF-most" size="large" aria-label="Most">
                Most
              </ToggleButton>
              <ToggleButton value="OF-all" size="large" aria-label="All">
                All
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How often do you eat meat or fish?
              <br />
              <Button onClick={handleOpenModal2}>
                <HelpOutlineIcon fontSize="small" /> Info
              </Button>
            </Typography>
          </Box>
          <Box my="2rem">
            <ToggleButtonGroup
              value={Meat}
              exclusive
              onChange={handleMeat}
              aria-label="Organic Food"
            >
              <ToggleButton value="M-vegan" size="large" aria-label="Vegan">
                <span>Vegan</span>
              </ToggleButton>
              <ToggleButton
                value="M-lacto-vegetatian"
                size="large"
                aria-label="Lacto-vegetarian"
              >
                <span>vegetarian</span>
              </ToggleButton>
              <ToggleButton
                value="M-below"
                size="large"
                aria-label="Below-average"
              >
                <span>1–2 times a week</span>
              </ToggleButton>
              <ToggleButton value="M-average" size="large" aria-label="Average">
                <span>Most meals</span>
              </ToggleButton>
              <ToggleButton
                value="M-above"
                size="large"
                aria-label="Above-average"
              >
                <span>Every meal</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of your food is produced locally, i.e., in your county?
              <br />
              <Button onClick={handleOpenModal3}>
                <HelpOutlineIcon fontSize="small" /> Info
              </Button>
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={FoodMiles}
              exclusive
              onChange={handleFoodMiles}
              aria-label="Food Miles"
            >
              <ToggleButton value="FM-none" size="large" aria-label="None">
                <span>None</span>
              </ToggleButton>
              <ToggleButton value="FM-some" size="large" aria-label="Some">
                <span>Some</span>
              </ToggleButton>
              <ToggleButton value="FM-most" size="large" aria-label="Most">
                <span>Most</span>
              </ToggleButton>
              <ToggleButton value="FM-all" size="large" aria-label="Almost all">
                <span>All</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of your food goes to landfill?
              <br />
              <Button onClick={handleOpenModal4}>
                <HelpOutlineIcon fontSize="small" /> Info
              </Button>
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={Waste}
              exclusive
              onChange={handleWaste}
              aria-label="Waste"
            >
              <ToggleButton
                value="W-lessThan5"
                size="large"
                aria-label="Less than 5%"
              >
                <span>Less than 5%</span>
              </ToggleButton>
              <ToggleButton
                value="W-lessThan10"
                size="large"
                aria-label="Less than 10%"
              >
                <span>Less than 10%</span>
              </ToggleButton>
              <ToggleButton
                value="W-lessThan25"
                size="large"
                aria-label="Average"
              >
                <span>Less than 25%</span>
              </ToggleButton>
              <ToggleButton
                value="W-25orMore"
                size="large"
                aria-label="Above-average"
              >
                <span>25% or more</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={2}
            validation={validationPass}
            nextStep="recycle"
            previousStep="houseInfo"
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
