import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import NumberOfPeople from "../components/questions/NumberOfPeople";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

export default function Index() {
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <NumberOfPeople />
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
            actualStep={0}
            nextStep="houseInfo"
            previousStep="/"
          />
        </Grid>
      </Grid>
    </div>
  );
}
