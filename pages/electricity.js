import React from "react";
import NavBar from "../components/NavBar";
import Electricity from "../components/questions/Electricity";
import Stepper from "../components/Steeper";

export default function PageElectricity() {
  return (
    <div>
      <NavBar />
      <Electricity />
      <Stepper
        stepsNumber={10}
        actualStep={1}
        nextStep="gas"
        previousStep="/"
      />
    </div>
  );
}
