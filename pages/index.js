import React from "react";
import Select from "react-select";
import NumberOfPeople from "../components/questions/NumberOfPeople";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

export default function Index() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <NavBar />
      <NumberOfPeople />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        <input type="submit" />
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
