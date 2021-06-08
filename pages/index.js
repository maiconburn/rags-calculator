import React from "react";
import NumberOfPeople from "../components/questions/NumberOfPeople";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

export default function Index() {
  return (
    <div>
      <NavBar />
      <NumberOfPeople />
      <Stepper
        stepsNumber={10}
        actualStep={0}
        nextStep="electricity"
        previousStep="/"
      />
    </div>
  );
}
