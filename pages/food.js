import React from "react";
import NavBar from "../components/NavBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Stepper from "../components/Steeper";

export default function PageGas() {
  const [state, setState] = React.useState({
    food: "",
    meat: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of the food that you eat is organic?
            </Typography>
          </Box>
          <Box my="2rem">
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Organic food
                </InputLabel>
                <Select
                  native
                  value={state.food}
                  onChange={handleChange}
                  label="Select one option"
                  inputProps={{
                    name: "food",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={3000}>None</option>
                  <option value={4800}>Some</option>
                  <option value={7000}>Most</option>
                  <option value={2000}>All</option>
                </Select>
              </FormControl>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much meat/dairy do you eat personally?
            </Typography>
          </Box>
          <Box my="2rem">
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Meat/dairy
                </InputLabel>
                <Select
                  native
                  value={state.meat}
                  onChange={handleChange}
                  label="Select one option"
                  inputProps={{
                    name: "meat",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={3000}>Above-average meat/dairy</option>
                  <option value={4800}>Average meat/dairy</option>
                  <option value={7000}>Below-average meat/dairy</option>
                  <option value={2000}>Lacto-vegetarian</option>
                  <option value={1000}>Vegan</option>
                </Select>
              </FormControl>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How much of your food is produced locally?
            </Typography>
          </Box>
          <Box my="2rem">
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Food miles
                </InputLabel>
                <Select
                  native
                  value={state.miles}
                  onChange={handleChange}
                  label="Select one option"
                  inputProps={{
                    name: "miles",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={3000}>
                    Very little (much foreign / out of season food)
                  </option>
                  <option value={4800}>Average</option>
                  <option value={2000}>Above average</option>
                  <option value={1000}>Almost all</option>
                </Select>
              </FormControl>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={10}
            actualStep={3}
            nextStep="/"
            previousStep="cars"
          />
        </Grid>
      </Grid>
    </div>
  );
}
