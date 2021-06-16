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

  const handleMiscellaneous = (event, newMiscellaneous) => {
    setMiscellaneous(newMiscellaneous);
  };

  React.useEffect(() => {
    window.localStorage.setItem("Miscellaneous", Miscellaneous);
    //const test = window.localStorage.getItem("SourceEnergy");
    //console.log(test);
  }, [Miscellaneous]);

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              What is your miscellaneous spending?
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
                value="M-above"
                size="large"
                aria-label="Above average"
              >
                <Grid container>
                  <Grid item xs={12}>
                    Above average
                  </Grid>
                  <Grid item xs={12} className={styles.buttonDescription}>
                    Teste
                  </Grid>
                </Grid>
              </ToggleButton>
              <ToggleButton value="M-average" size="large" aria-label="Average">
                <Grid container>
                  <Grid item xs={12}>
                    Average
                  </Grid>
                  <Grid item xs={12} className={styles.buttonDescription}>
                    Teste
                  </Grid>
                </Grid>
              </ToggleButton>
              <ToggleButton
                value="M-below"
                size="large"
                aria-label="Below average"
              >
                <Grid container>
                  <Grid item xs={12}>
                    Below average
                  </Grid>
                  <Grid item xs={12} className={styles.buttonDescription}>
                    Teste
                  </Grid>
                </Grid>
              </ToggleButton>
              <ToggleButton
                value="M-much-below"
                size="large"
                aria-label="Much below average"
              >
                <Grid container>
                  <Grid item xs={12}>
                    Much below average
                  </Grid>
                  <Grid item xs={12} className={styles.buttonDescription}>
                    Teste
                  </Grid>
                </Grid>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={7}
            nextStep="userInfo"
            previousStep="flights"
          />
        </Grid>
      </Grid>
    </div>
  );
}
