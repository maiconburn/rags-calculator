import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";

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

export default function results() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container c>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h2" align="center">
              Your carbon footprint is
            </Typography>
          </Box>
          <Box my="2rem">
            <Typography variant="h3" align="center">
              200 tonnes CO2
            </Typography>
          </Box>
          <Box
            my="1rem"
            direction="column"
            justify="center"
            alignItems="center"
          >
            <form className={classes.root} noValidate autoComplete="off">
              <Grid
                container
                xs={12}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<EcoIcon />}
                >
                  Offset Now
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            my="1rem"
            direction="row"
            justify="center"
            alignItems="center"
          ></Box>
        </Grid>
      </Grid>
    </div>
  );
}
