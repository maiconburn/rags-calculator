import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

export default function Cars() {
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h4" align="center">
              How many cars are used by your household?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="3rem">
            <ButtonIncrementDecrement />
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
