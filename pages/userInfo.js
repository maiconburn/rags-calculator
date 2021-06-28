import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import HubspotForm from "react-hubspot-form";
//import TextField from "@material-ui/core/TextField";
//import Button from "@material-ui/core/Button";
//import EcoIcon from "@material-ui/icons/Eco";
//import styles from "../styles/UserInfo.module.scss";

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
            <HubspotForm
              portalId="20045770"
              formId="49e69749-ca31-4b4c-9d88-3d823ed45ef0"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
            {/*
            <form className={classes.root} noValidate autoComplete="off">
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="Type your full name"
                  name="firstname"
                  placeholder="Type your first name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="Type your full name"
                  name="lastname"
                  placeholder="Type your last name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Type your email"
                  name="email"
                  placeholder="Type your email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-required"
                  label="Type your phone number"
                  name="phone"
                  placeholder="Type your phone number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/results"
                  className={classes.button}
                  startIcon={<EcoIcon />}
                >
                  Calculate Now
                </Button>
              </Grid>
            </form>
            */}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={8}
            nextStep="/"
            previousStep="miscellaneous"
          />
        </Grid>
      </Grid>
    </div>
  );
}
