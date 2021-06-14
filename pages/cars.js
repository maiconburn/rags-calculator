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
  const [Cars, setCars] = React.useState();
  const handleCars = (event, newCars) => {
    setCars(newCars);
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
            <ButtonIncrementDecrement start={0} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              What is the average mileage for your cars?
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={Cars}
              exclusive
              onChange={handleCars}
              aria-label="Cars"
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
            stepsNumber={8}
            actualStep={4}
            nextStep="publicTransport"
            previousStep="waste"
          />
        </Grid>
      </Grid>
    </div>
  );
}
