import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

class ButtonIncrementDecrement extends React.Component {
  state = { counter: 1 };

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };
  render() {
    const displayCounter =
      this.state.counter <= 0 ? (this.state.counter = 1) : this.state.counter;

    return (
      <ButtonGroup size="large" aria-label="large outlined button group">
        <Button onClick={this.handleDecrement}>-</Button>
        <Typography variant="h1">{displayCounter}</Typography>
        <Input type="hidden" value={displayCounter} name="numberOfPeople" />
        <Button onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
    );
  }
}

export default ButtonIncrementDecrement;
