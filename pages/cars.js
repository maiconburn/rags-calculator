import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

export default function Cars() {
  const [FoodMiles, setFoodMiles] = React.useState("FM-little");
  const handleFoodMiles = (event, newFoodMiles) => {
    setFoodMiles(newFoodMiles);
  };
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
            <ButtonIncrementDecrement />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How many cars are used by your household?
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={FoodMiles}
              exclusive
              onChange={handleFoodMiles}
              aria-label="Food Miles"
            >
              <ToggleButton
                value="CM-low"
                size="large"
                aria-label="Very little"
              >
                <Tooltip title="(6,000 miles or less)" aria-label="add">
                  <span>Low</span>
                </Tooltip>
              </ToggleButton>
              <ToggleButton
                value="CM-average"
                size="large"
                aria-label="Average"
              >
                <Tooltip title="(Around 9,000 miles)" aria-label="add">
                  <span>Average</span>
                </Tooltip>
              </ToggleButton>
              <ToggleButton
                value="CM-above"
                size="large"
                aria-label="Above average"
              >
                <Tooltip title="(12,000 miles or more)" aria-label="add">
                  <span>High</span>
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={10}
            actualStep={2}
            nextStep="food"
            previousStep="houseInfo"
          />
        </Grid>
      </Grid>
    </div>
  );
}
