import React from "react";
import { Doughnut } from "react-chartjs-2";
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
  const [EnergyImpact, setEnergyImpact] = React.useState();
  const [FoodImpact, setFoodImpact] = React.useState();
  const [RecycleImpact, setRecycleImpact] = React.useState();
  const [CarsImpact, setCarsImpact] = React.useState();
  const [PublicTransportImpact, setPublicTransportImpact] = React.useState();
  const [FlightsImpact, setFlightsImpact] = React.useState();
  const [TotalCO2, setTotalCO2] = React.useState();

  const data = {
    labels: ["Energy", "Food", "Cars", "Public Transport", "Flights"],
    datasets: [
      {
        data: [
          EnergyImpact,
          FoodImpact,
          CarsImpact,
          PublicTransportImpact,
          FlightsImpact,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF4456",
          "#004456",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF5556",
          "#335556",
        ],
      },
    ],
  };

  React.useEffect(() => {
    const peopleHousehold = window.localStorage.getItem("peopleHousehold");
    const SourceEnergy = window.localStorage.getItem("SourceEnergy");
    const HouseSize = window.localStorage.getItem("HouseSize");
    const OrganicFood = window.localStorage.getItem("OrganicFood");
    const Meat = window.localStorage.getItem("Meat");
    const FoodMiles = window.localStorage.getItem("FoodMiles");
    const Waste = window.localStorage.getItem("Waste");
    const RecycleMix = window.localStorage.getItem("RecycleMix");
    const RecyclePlastic = window.localStorage.getItem("RecyclePlastic");
    const Cars = window.localStorage.getItem("Cars");
    const CarsMileage = window.localStorage.getItem("CarsMileage");
    const PublicTransport = window.localStorage.getItem("PublicTransport");
    const Flights = window.localStorage.getItem("Flights");

    //EnergyImpact calculation

    var ElectricEnergyConsumption = 0;
    var GasEnergyConsumption = 0;

    if (SourceEnergy == "electricity") {
      switch (HouseSize) {
        case "small":
          ElectricEnergyConsumption = 3000;
          break;
        case "medium":
          ElectricEnergyConsumption = 4800;
          break;
        case "large":
          ElectricEnergyConsumption = 7000;
          break;
        case "halls":
          ElectricEnergyConsumption = 2000;
          break;
      }
      const HouseEnergyImpact =
        Math.round(ElectricEnergyConsumption * 0.000527 * 100) / 100;
      const PersonalEnergyImpact = HouseEnergyImpact / peopleHousehold;

      const EnergyImpact = PersonalEnergyImpact;
      console.log("Energy Impact", EnergyImpact);
    } else {
      switch (HouseSize) {
        case "small":
          ElectricEnergyConsumption = 3000;
          GasEnergyConsumption = 12000;
          break;
        case "medium":
          ElectricEnergyConsumption = ElectricEnergyConsumption + 4800;
          GasEnergyConsumption = GasEnergyConsumption + 18000;
          break;
        case "large":
          ElectricEnergyConsumption = ElectricEnergyConsumption + 7000;
          GasEnergyConsumption = GasEnergyConsumption + 27000;
          break;
        case "halls":
          ElectricEnergyConsumption = ElectricEnergyConsumption + 2000;
          GasEnergyConsumption = GasEnergyConsumption + 5000;
          break;
      }
      const HouseEnergyImpact =
        Math.round(ElectricEnergyConsumption * 0.000527 * 100) / 100 +
        Math.round(GasEnergyConsumption * 0.000203 * 100) / 100;
      const PersonalEnergyImpact = HouseEnergyImpact / peopleHousehold;

      setEnergyImpact(PersonalEnergyImpact);
    }

    //FoodImpact calculation

    var OrganicFoodImpact = 0;

    switch (OrganicFood) {
      case "OF-none":
        OrganicFoodImpact = 0.7;
        break;
      case "OF-some":
        OrganicFoodImpact = 0.5;
        break;
      case "OF-most":
        OrganicFoodImpact = 0.2;
        break;
      case "OF-all":
        OrganicFoodImpact = 0;
        break;
    }

    var MeatImpact = 0;

    switch (Meat) {
      case "M-vegan":
        MeatImpact = 0;
        break;
      case "M-lacto-vegetatian":
        MeatImpact = 0.1;
        break;
      case "M-below":
        MeatImpact = 0.25;
        break;
      case "M-average":
        MeatImpact = 0.4;
        break;
      case "M-above":
        MeatImpact = 0.6;
        break;
    }

    var FoodMilesImpact = 0;

    switch (FoodMiles) {
      case "FM-none":
        FoodMilesImpact = 0.6;
        break;
      case "FM-some":
        FoodMilesImpact = 0.4;
        break;
      case "FM-most":
        FoodMilesImpact = 0.2;
        break;
      case "FM-all":
        FoodMilesImpact = 0.05;
        break;
    }

    var WasteImpact = 0;

    switch (Waste) {
      case "W-lessThan5":
        WasteImpact = 0.025;
        break;
      case "W-lessThan10":
        WasteImpact = 0.125;
        break;
      case "W-lessThan25":
        WasteImpact = 0.25;
        break;
      case "W-25orMore":
        WasteImpact = 0.375;
        break;
    }

    setFoodImpact(
      Math.round(OrganicFoodImpact + MeatImpact + FoodMilesImpact) * WasteImpact
    );

    //RecycleImpact calculation

    var RecycleMixImpact = 0;

    switch (RecycleMix) {
      case "RM-yes":
        RecycleMixImpact = 1;
        break;
      case "RM-no":
        RecycleMixImpact = 0;
        break;
    }

    var RecyclePlasticImpact = 0;

    switch (RecyclePlastic) {
      case "RP-yes":
        RecyclePlasticImpact = 1;
        break;
      case "RP-no":
        RecyclePlasticImpact = 0;
        break;
    }

    setRecycleImpact(-(0.7 * RecycleMixImpact) - 0.14 * RecyclePlasticImpact);

    //CarsImpact calculation

    var CarsMileageImpact = 0;

    switch (CarsMileage) {
      case "OF-low":
        CarsMileageImpact = 5000;
        break;
      case "C-average":
        CarsMileageImpact = 10000;
        break;
      case "C-above":
        CarsMileageImpact = 15000;
        break;
    }

    const mpg = 52;

    setCarsImpact(
      Math.round((100 * CarsMileageImpact * 0.0143) / mpg / 100) * Cars
    );

    console.log("Cars Impact", CarsImpact);

    //PublicTransport calculation

    const PublicTransportTotalMil = PublicTransport * 48;

    setPublicTransportImpact(
      Math.round(PublicTransportTotalMil * 0.0001 * 100) / 100
    );

    //Flights calculation

    setFlightsImpact(Flights * 0.25);

    setTotalCO2(
      EnergyImpact +
        FoodImpact +
        RecycleImpact +
        CarsImpact +
        PublicTransportImpact +
        FlightsImpact +
        1.1
    );

    console.log("Your total Impact is:", TotalCO2);

    //const HowManyCreditsBuy = TotalCO2.toFixed(0);

    //console.log("You should buy:", HowManyCreditsBuy, "Carbon Credits");

    console.log(
      peopleHousehold,
      SourceEnergy,
      HouseSize,
      OrganicFood,
      Meat,
      FoodMiles,
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
              {TotalCO2} tonnes CO2
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
