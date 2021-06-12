import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";
import Stepper from "../components/Steeper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
      width: "37ch",
    },
  },
}));

export default function userInfo() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              We're almost there, enter your name and email and check your
              carbon footprint.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="1rem" direction="row" justify="center" alignItems="center">
            <form className={classes.root} noValidate autoComplete="off">
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  defaultValue="Hello World"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue="Hello World"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<EcoIcon />}
                >
                  Calculate Now
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={8}
            actualStep={7}
            nextStep="/"
            previousStep="flights"
          />
        </Grid>
      </Grid>
    </div>
  );
}
