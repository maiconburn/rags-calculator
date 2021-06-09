import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ToggleButtons() {
  const [SourceEnergy, setSourceEnergy] = React.useState("electricity");

  const handleSourceEnergy = (event, newSourceEnergy) => {
    setSourceEnergy(newSourceEnergy);
  };

  return (
    <ToggleButtonGroup
      value={SourceEnergy}
      exclusive
      onChange={handleSourceEnergy}
      aria-label="text alignment"
    >
      <ToggleButton value="electricity" size="large" aria-label="Electricity">
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
  );
}
