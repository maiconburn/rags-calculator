import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

export default function Cars() {
  const [CarsMileage, setCarsMileage] = React.useState();
  const handleCarsMileage = (event, newCarsMileage) => {
    setCarsMileage(newCarsMileage);
  };

  React.useEffect(() => {
    window.localStorage.setItem("CarsMileage", CarsMileage);
    //const test = window.localStorage.getItem("SourceEnergy");
    //console.log(test);
  }, [CarsMileage]);

  // // Only the slider will have a modal button
  // const modal1 = (
  //   <Grid
  //     container
  //     direction="column"
  //     justify="center"
  //     alignItems="center"
  //     style={modalStyle}
  //     className={classes.paper}
  //   >
  //     <p id="simple-modal-description">
  //       Don’t include any miles you travel while at work in your input, this
  //       will be covered as business miles in your company's footprint.
  //     </p>
  //     <Grid item>
  //       <Button variant="contained" color="primary" onClick={handleClose}>
  //         Close
  //       </Button>
  //     </Grid>
  //   </Grid>
  // );

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
            <ButtonIncrementDecrement start={0} variable="Cars" />
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
              value={CarsMileage}
              exclusive
              onChange={handleCarsMileage}
              aria-label="Cars Mileage"
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
            stepsNumber={9}
            actualStep={4}
            nextStep="publicTransport"
            previousStep="recycle"
          />
        </Grid>
      </Grid>
    </div>
  );
}
