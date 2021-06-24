import React from "react";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import styles from "../styles/HouseInfo.module.scss";

export default function houseInfo() {
  const [SourceEnergy, setSourceEnergy] = React.useState();
  const [HouseSize, setHouseSize] = React.useState();

  const handleSourceEnergy = (event, newSourceEnergy) => {
    setSourceEnergy(newSourceEnergy);
  };

  const handleHouseSize = (event, newHouseSize) => {
    setHouseSize(newHouseSize);
  };

  React.useEffect(() => {
    window.localStorage.setItem("SourceEnergy", SourceEnergy);
    window.localStorage.setItem("HouseSize", HouseSize);
    //const test = window.localStorage.getItem("SourceEnergy");
    //console.log(test);
  }, [SourceEnergy, HouseSize]);

  // // Gas + electricity question
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
  //       You produce greenhouse gas emissions when using electricity and gas in
  //       the home. We will estimate your electricity and gas output using the
  //       size of your home.
  //     </p>
  //     <Grid item>
  //       <Button variant="contained" color="primary" onClick={handleClose}>
  //         Close
  //       </Button>
  //     </Grid>
  //   </Grid>
  // );

  // // House size question
  // const modal2 = (
  //   <Grid
  //     container
  //     direction="column"
  //     justify="center"
  //     alignItems="center"
  //     style={modalStyle}
  //     className={classes.paper}
  //   >
  //     <p id="simple-modal-description">
  //       We measure your estimated electricity and gas output by the number of
  //       rooms in your home. (small = 1 bedroom, medium = 2–3 bedrooms, large =
  //       4+ bedrooms)
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

      <Grid container direction="column" alignItems="center" justify="center">
        <Box my="2rem">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h5" align="center">
                What energy sources do you have in your household?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my="2rem">
          <ToggleButtonGroup
            className={styles.toggleButtonGroup}
            value={SourceEnergy}
            exclusive
            onChange={handleSourceEnergy}
            aria-label="Source of energy"
          >
            <ToggleButton
              value="electricity"
              size="large"
              aria-label="Electricity"
            >
              Electricity
            </ToggleButton>
            <ToggleButton
              value="electricityGas"
              size="large"
              aria-label="Electricity + Gas"
            >
              Electricity + Gas
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box my="2rem">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h5" align="center">
                How big is your home?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my="2rem">
          <ToggleButtonGroup
            className={styles.toggleButtonGroup}
            value={HouseSize}
            exclusive
            onChange={handleHouseSize}
            aria-label="House size"
          >
            <ToggleButton value="small" size="large" aria-label="Small">
              <Grid container>
                <Grid item xs={12}>
                  Small
                </Grid>
                <Grid item xs={12} className={styles.buttonDescription}>
                  1 Bedroom
                </Grid>
              </Grid>
            </ToggleButton>

            <ToggleButton value="medium" size="large" aria-label="Medium">
              <Grid container>
                <Grid item xs={12}>
                  Medium
                </Grid>
                <Grid item xs={12} className={styles.buttonDescription}>
                  2–3 Bedrooms
                </Grid>
              </Grid>
            </ToggleButton>

            <ToggleButton value="large" size="large" aria-label="Large">
              <Grid container>
                <Grid item xs={12}>
                  Large
                </Grid>
                <Grid item xs={12} className={styles.buttonDescription}>
                  4+ Bedrooms
                </Grid>
              </Grid>
            </ToggleButton>

            <ToggleButton
              value={"halls"}
              size="large"
              aria-label="Halls of residence"
            >
              Halls of residence
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={1}
            nextStep="food"
            previousStep="/"
          />
        </Grid>
      </Grid>
    </div>
  );
}
