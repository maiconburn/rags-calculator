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
  const [SourceEnergy, setSourceEnergy] = React.useState("electricity");
  const [HouseSize, setHouseSize] = React.useState("small");

  const handleSourceEnergy = (event, newSourceEnergy) => {
    setSourceEnergy(newSourceEnergy);
  };

  const handleHouseSize = (event, newHouseSize) => {
    setHouseSize(newHouseSize);
  };

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
                How much electricity is used in your household?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my="2rem">
          <ToggleButtonGroup
            value={SourceEnergy}
            exclusive
            onChange={handleSourceEnergy}
            aria-label="text alignment"
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
                How much electricity is used in your household?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my="2rem">
          <ToggleButtonGroup
            value={HouseSize}
            exclusive
            onChange={handleHouseSize}
            aria-label="text alignment"
          >
            <Tooltip title="2 rooms" aria-label="add">
              <ToggleButton value="small" size="large" aria-label="Small">
                Small
              </ToggleButton>
            </Tooltip>
            <Tooltip title="Add" aria-label="add">
              <ToggleButton value="medium" size="large" aria-label="Medium">
                Medium
              </ToggleButton>
            </Tooltip>

            <ToggleButton value="large" size="large" aria-label="Large">
              Large
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
            stepsNumber={10}
            actualStep={1}
            nextStep="cars"
            previousStep="/"
          />
        </Grid>
      </Grid>
    </div>
  );
}
