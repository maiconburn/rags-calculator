import React from "react";
import NavBar from "../components/NavBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import Stepper from "../components/Steeper";

export default function Food() {
  const [OrganicFood, setOrganicFood] = React.useState();
  const [Meat, setMeat] = React.useState();
  const [FoodMiles, setFoodMiles] = React.useState();
  const [Waste, setWaste] = React.useState();

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
    window.localStorage.setItem("Waste", JSON.stringify(Waste));
    //const test = window.localStorage.getItem("SourceEnergy");
    //console.log(test);
  }, [OrganicFood, Meat, FoodMiles, Waste]);

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of the food that you eat is organic?
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
              How much meat/dairy do you eat?
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
                <span>Below-average</span>
              </ToggleButton>
              <ToggleButton value="M-average" size="large" aria-label="Average">
                <span>Average</span>
              </ToggleButton>
              <ToggleButton
                value="M-above"
                size="large"
                aria-label="Above-average"
              >
                <span>Above-average</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of your food is produced locally?
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
              How much of your food do you waste?
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
                value="W-above"
                size="large"
                aria-label="Above average"
              >
                <span>Less than 5%</span>
              </ToggleButton>
              <ToggleButton
                value="W-below"
                size="large"
                aria-label="Below-average"
              >
                <span>Less than 10%</span>
              </ToggleButton>
              <ToggleButton value="W-average" size="large" aria-label="Average">
                <span>Less than 25%</span>
              </ToggleButton>
              <ToggleButton
                value="W-above"
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
            stepsNumber={8}
            actualStep={2}
            nextStep="waste"
            previousStep="houseInfo"
          />
        </Grid>
      </Grid>
    </div>
  );
}
