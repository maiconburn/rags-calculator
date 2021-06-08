import React from "react";
import NumberOfPeople from "../components/questions/NumberOfPeople";
//import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

export default function Index() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [counter, setCounter] = React.useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div>
      <NavBar />
      <NumberOfPeople />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ButtonGroup size="large" aria-label="large outlined button group">
          <Button onClick={handleDecrement}>-</Button>
          <Typography variant="h1">{counter}</Typography>
          <Controller
            name="numberOfPeople"
            control={control}
            render={({ field }) => (
              <Input type="text" value={counter} {...field} />
            )}
          />
          <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
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
