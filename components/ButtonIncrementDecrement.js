import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "../styles/components/ButtonIncrementDecrement.module.scss";

export default function ButtonIncrementDecrement() {
  const [counter, setCounter] = React.useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };
  return (
    <Grid container>
      <Fab
        size="large"
        color="secondary"
        onClick={handleDecrement}
        aria-label="add"
        className={styles.ButtonIncrement}
      >
        <RemoveIcon />
      </Fab>
      <Typography className={styles.Counter}>{counter}</Typography>
      <Fab
        size="large"
        color="secondary"
        onClick={handleIncrement}
        aria-label="add"
        className={styles.ButtonDecrement}
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
}
