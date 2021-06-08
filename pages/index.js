import React from "react";
import NumberOfPeople from "../components/questions/NumberOfPeople";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import { useForm, Controller } from "react-hook-form";

export default function Index() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <NavBar />
      <NumberOfPeople />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="numberOfPeople"
          control={control}
          render={({ field }) => <ButtonIncrementDecrement {...field} />}
        />
      </form>
      <Stepper
        stepsNumber={10}
        actualStep={0}
        nextStep="electricity"
        previousStep="/"
      />
    </div>
  );
}
