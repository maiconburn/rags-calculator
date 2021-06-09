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
    console.log(event);
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
                Roughly, how big is your house?
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
<<<<<<< HEAD
            <ToggleButton value="small" size="large" aria-label="Small">
              <Tooltip title="Test">
                <span>Small</span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton value="medium" size="large" aria-label="Medium">
              <Tooltip title="Add" aria-label="add">
                <span>Medium</span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton value="large" size="large" aria-label="Large">
              <Tooltip title="Add" aria-label="add">
                <span>Large</span>
              </Tooltip>
            </ToggleButton>

            <ToggleButton
              value="halls"
              size="large"
              aria-label="Halls of residence"
            >
              <Tooltip title="Add" aria-label="add">
                <span>Halls of residence</span>
              </Tooltip>
            </ToggleButton>
=======
            <Tooltip title="1 Room" aria-label="add">
              <ToggleButton value="small" size="large" aria-label="Small">
                Small
              </ToggleButton>
            </Tooltip>
            <Tooltip title="2-3 Rooms" aria-label="add">
              <ToggleButton value="medium" size="large" aria-label="Medium">
                Medium
              </ToggleButton>
            </Tooltip>
            <Tooltip title="4+ Rooms" aria-label="add">
              <ToggleButton value="large" size="large" aria-label="Large">
                Large
              </ToggleButton>
            </Tooltip>
            <Tooltip title="Add" aria-label="add">
              <ToggleButton
                value="halls"
                size="large"
                aria-label="Halls of residence"
              >
                Student Halls
              </ToggleButton>
            </Tooltip>
>>>>>>> 719f155548007cf461fff4057377643162fdc818
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
