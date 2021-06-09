import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Stepper from "../components/Steeper";
export default function houseInfo() {
  const [SourceEnergy, setSourceEnergy] = React.useState("electricity");

  const [state, setState] = React.useState({
    size: "",
    name: "hai",
  });

  const handleSourceEnergy = (event, newSourceEnergy) => {
    setSourceEnergy(newSourceEnergy);
  };

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

      <Grid container direction="column" alignItems="center" justify="center">
        <Box my="2rem">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h5">
                How much electricity is used in your household?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my="2rem">
          <ToggleButtonGroup
            value={SourceEnergy}
            exclusive
            onChange={handleSourceEnergy}
            aria-label="text alignment"
          >
            <ToggleButton
              value="electricity"
              size="large"
              aria-label="Electricity"
            >
              Electricity
            </ToggleButton>
            <ToggleButton
              value="electricityGas"
              size="large"
              aria-label="Electricity + Gas"
            >
              Electricity + Gas
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box my="2rem">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h5">
                How much electricity is used in your household?
              </Typography>
            </Grid>
          </Grid>
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
                Residence size
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Select one option"
                inputProps={{
                  name: "size",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={3000}>Small (3,000 kWh)</option>
                <option value={4800}>Medium (4,800 kWh)</option>
                <option value={7000}>Large (7,000 kWh)</option>
                <option value={2000}>Halls of Residence (2,000 kWh)</option>
              </Select>
            </FormControl>
          </Grid>
        </Box>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={10}
            actualStep={1}
            nextStep="gas"
            previousStep="/"
          />
        </Grid>
      </Grid>
    </div>
  );
}
