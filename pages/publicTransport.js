import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Slider from "../components/Slider";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

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
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How many miles do you travel on public transport weekly?
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
            previousStep="cars"
          />
        </Grid>
      </Grid>
    </div>
  );
}
