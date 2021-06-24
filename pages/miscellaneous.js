import React from "react";
import NavBar from "../components/NavBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import Stepper from "../components/Steeper";
import styles from "../styles/Miscellaneous.module.scss";

export default function Food() {
  const [Miscellaneous, setMiscellaneous] = React.useState();
  const [validationPass, setValidationPass] = React.useState(false);

  const handleMiscellaneous = (event, newMiscellaneous) => {
    setMiscellaneous(newMiscellaneous);
  };

  React.useEffect(() => {
    window.localStorage.setItem("Miscellaneous", Miscellaneous);
    if (Miscellaneous != null) {
      setValidationPass(true);
    }
  }, [Miscellaneous, validationPass]);

  // // Miscellaneous spending question
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
  //       This is more about the amount of items you buy rather than the
  //       individual cost of each item. If you are a frugal spender, you seriously
  //       consider each purchase and try to keep consumption to a minimum.
  //       Conversely, big spenders will buy large volumes of items, for example,
  //       lots of clothes.
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
              How would you describe your overall spending habits?
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={Miscellaneous}
              exclusive
              onChange={handleMiscellaneous}
              aria-label="Miscellaneous"
            >
              <ToggleButton
                value="M-much-below"
                size="large"
                aria-label="Much below average"
              >
                Frugal
              </ToggleButton>
              <ToggleButton
                value="M-below"
                size="large"
                aria-label="Below average"
              >
                Average
              </ToggleButton>
              <ToggleButton value="M-average" size="large" aria-label="Average">
                Spender
              </ToggleButton>
              <ToggleButton
                value="M-above"
                size="large"
                aria-label="Above average"
              >
                Big Spender
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={7}
            validation={validationPass}
            nextStep="userInfo"
            previousStep="flights"
          />
        </Grid>
      </Grid>
    </div>
  );
}
