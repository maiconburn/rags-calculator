import React from "react";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

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
  React.useEffect(() => {
    const peopleHousehold = window.localStorage.getItem("peopleHousehold");
    const SourceEnergy = window.localStorage.getItem("SourceEnergy");
    const HouseSize = window.localStorage.getItem("HouseSize");
    const OrganicFood = window.localStorage.getItem("OrganicFood");
    const Meat = window.localStorage.getItem("Meat");
    const FoodMiles = window.localStorage.getItem("FoodMiles");
    const Composting = window.localStorage.getItem("Composting");
    const Waste = window.localStorage.getItem("Waste");
    const RecycleMix = window.localStorage.getItem("RecycleMix");
    const RecyclePlastic = window.localStorage.getItem("RecyclePlastic");
    const Cars = window.localStorage.getItem("Cars");
    const CarsMileage = window.localStorage.getItem("CarsMileage");
    const PublicTransport = window.localStorage.getItem("PublicTransport");
    const Flights = window.localStorage.getItem("Flights");

    //Categories definition
    const EnergyImpact = 0;
    const FoodImpact = 0;
    const WasteImpact = 0;
    const RecycleImpact = 0;
    const CarsImpact = 0;
    const PublicTransportImpact = 0;
    const FlightsImpact = 0;

    console.log(
      peopleHousehold,
      SourceEnergy,
      HouseSize,
      OrganicFood,
      Meat,
      FoodMiles,
      Composting,
      Waste,
      RecycleMix,
      RecyclePlastic,
      Cars,
      CarsMileage,
      PublicTransport,
      Flights
    );
  }, []);

  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container>
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
        <Box my="2rem">
          <Typography variant="h3" align="center">
            Chart
          </Typography>
          <Box direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Doughnut data={data} width={400} height={400} />
            </Grid>
          </Box>
        </Box>
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
