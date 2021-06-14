import React from "react";
import NavBar from "../components/NavBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import Stepper from "../components/Steeper";

export default function Food() {
  const [Composting, setComposting] = React.useState();
  const [Waste, setWaste] = React.useState();
  const [RecycleMix, setRecycleMix] = React.useState();
  const [RecyclePlastic, setRecyclePlastic] = React.useState();

  const handleComposting = (event, newComposting) => {
    setComposting(newComposting);
  };
  const handleWaste = (event, newWaste) => {
    setWaste(newWaste);
  };
  const handleRecycleMix = (event, newRecycleMix) => {
    setRecycleMix(newRecycleMix);
  };

  const handleRecyclePlastic = (event, newRecyclePlastic) => {
    setRecyclePlastic(newRecyclePlastic);
  };
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of your unused food do you compost?
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={Composting}
              exclusive
              onChange={handleComposting}
              aria-label="Composting"
            >
              <ToggleButton value="C-none" size="large" aria-label="None">
                <Tooltip title="None" aria-label="add">
                  <span>None</span>
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="C-some" size="large" aria-label="Some">
                <Tooltip title="Some" aria-label="add">
                  <span>Some</span>
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="C-all" size="large" aria-label="All">
                <Tooltip title="All" aria-label="add">
                  <span>All</span>
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of your food goes to landfill?
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={Waste}
              exclusive
              onChange={handleWaste}
              aria-label="Waste"
            >
              <ToggleButton
                value="W-little"
                size="large"
                aria-label="Very little"
              >
                <span>Less than 5%</span>
              </ToggleButton>
              <ToggleButton
                value="W-below"
                size="large"
                aria-label="Below-average"
              >
                <span>Less than 10%</span>
              </ToggleButton>
              <ToggleButton value="W-average" size="large" aria-label="Average">
                <span>Less than 25%</span>
              </ToggleButton>
              <ToggleButton
                value="W-above"
                size="large"
                aria-label="Above-average"
              >
                <span>25% or more</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              Do you recycle paper, glass and metal?
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={RecycleMix}
              exclusive
              onChange={handleRecycleMix}
              aria-label="Recycle Mix"
            >
              <ToggleButton value="RM-yes" size="large" aria-label="Yes">
                <span>Yes</span>
              </ToggleButton>
              <ToggleButton value="RM-no" size="large" aria-label="No">
                <span>No</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              Do you recycle plastic?
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={RecyclePlastic}
              exclusive
              onChange={handleRecyclePlastic}
              aria-label="Recycle Plastic"
            >
              <ToggleButton value="RP-yes" size="large" aria-label="Yes">
                <span>Yes</span>
              </ToggleButton>
              <ToggleButton value="RP-no" size="large" aria-label="No">
                <span>No</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={8}
            actualStep={3}
            nextStep="cars"
            previousStep="food"
          />
        </Grid>
      </Grid>
    </div>
  );
}
