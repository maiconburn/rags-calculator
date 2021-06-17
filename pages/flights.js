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
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];

export default function Flights() {
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              In a normal year, how many hours do you spend flying?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="1rem">
            <Slider variable="Flights" marks={marks} max="100" step="2" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={6}
            nextStep="miscellaneous"
            previousStep="publicTransport"
          />
        </Grid>
      </Grid>
    </div>
  );
}
