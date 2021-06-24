import React from "react";
import NavBar from "../components/NavBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import Stepper from "../components/Steeper";

export default function Recycle() {
  const [RecycleMix, setRecycleMix] = React.useState();
  const [RecyclePlastic, setRecyclePlastic] = React.useState();
  const [validationPass, setValidationPass] = React.useState(false);

  const handleRecycleMix = (event, newRecycleMix) => {
    setRecycleMix(newRecycleMix);
  };
  const handleRecyclePlastic = (event, newRecyclePlastic) => {
    setRecyclePlastic(newRecyclePlastic);
  };

  React.useEffect(() => {
    window.localStorage.setItem("RecycleMix", RecycleMix);
    window.localStorage.setItem("RecyclePlastic", RecyclePlastic);
    if (RecycleMix != null && RecyclePlastic != null) {
      setValidationPass(true);
    }
  }, [RecycleMix, RecyclePlastic, validationPass]);

  // // Recycling paper question modal
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
  //       Increasing the lifecycle of materials will result in less CO2 emissions,
  //       rather than producing new materials each time a product is manufactured.
  //     </p>
  //     <Grid item>
  //       <Button variant="contained" color="primary" onClick={handleClose}>
  //         Close
  //       </Button>
  //     </Grid>
  //   </Grid>
  // );

  // // Recycling plastic question
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
  //       Increasing the lifecycle of materials will result in less CO2 emissions,
  //       rather than producing new materials each time a product is manufactured.
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
            stepsNumber={9}
            actualStep={3}
            validation={validationPass}
            nextStep="cars"
            previousStep="food"
          />
        </Grid>
      </Grid>
    </div>
  );
}
