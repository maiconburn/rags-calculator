import React from "react";
import NavBar from "../components/NavBar";
import Gas from "../components/questions/Gas";
import Stepper from "../components/Steeper";

export default function PageGas() {
  return (
    <div>
      <NavBar />
      <Gas />
      <Stepper
        stepsNumber={10}
        actualStep={2}
        nextStep="zebu"
        previousStep="houseInfo"
      />
    </div>
  );
}
