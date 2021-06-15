import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Slider from "../components/Slider";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

export default function PublicTransport() {
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How many journeys by public transport do you do weekly?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Slider
              variable="PublicTransport"
              description="Enter your regular mileage each week:"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={8}
            actualStep={5}
            nextStep="flights"
            previousStep="cars"
          />
        </Grid>
      </Grid>
    </div>
  );
}
