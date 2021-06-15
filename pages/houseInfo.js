import React from "react";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
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
    window.localStorage.setItem("SourceEnergy", JSON.stringify(SourceEnergy));
    window.localStorage.setItem("HouseSize", JSON.stringify(HouseSize));
    //const test = window.localStorage.getItem("SourceEnergy");
    //console.log(test);
  }, [SourceEnergy, HouseSize]);

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
            value={HouseSize}
            exclusive
            onChange={handleHouseSize}
            aria-label="House size"
          >
            <ToggleButton value="small" size="large" aria-label="Small">
              <Tooltip title="1 Room" aria-label="add">
                <span>Small</span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton value="medium" size="large" aria-label="Medium">
              <Tooltip title="2–3 Rooms" aria-label="add">
                <span>Medium</span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton value="large" size="large" aria-label="Large">
              <Tooltip title="4+ Rooms" aria-label="add">
                <span>Large</span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton
              value="halls"
              size="large"
              aria-label="Halls of residence"
            >
              Halls of residence
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={8}
            actualStep={1}
            nextStep="food"
            previousStep="/"
          />
        </Grid>
      </Grid>
    </div>
  );
}
