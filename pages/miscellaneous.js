import React from "react";
import NavBar from "../components/NavBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import Stepper from "../components/Steeper";
import styles from "../styles/Miscellaneous.module.scss";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Food() {
  const classes = useStyles();
  const [Miscellaneous, setMiscellaneous] = React.useState();
  const [validationPass, setValidationPass] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [modalBody, setModalBody] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleOpenModal1 = () => {
    setModalBody(body1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body1 = (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
      style={modalStyle}
      className={classes.paper}
    >
      <Grid item>
        <Typography
          variant="body1"
          align="center"
          id="simple-modal-description"
        >
          This is more about the amount of items you buy rather than the
          individual cost of each item. If you are a frugal spender, you
          seriously consider each purchase and try to keep consumption to a
          minimum. Conversely, big spenders will buy large volumes of items, for
          example, lots of clothes.
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </Grid>
  );

  const handleMiscellaneous = (event, newMiscellaneous) => {
    setMiscellaneous(newMiscellaneous);
  };

  React.useEffect(() => {
    window.localStorage.setItem("Miscellaneous", Miscellaneous);
    if (Miscellaneous != null) {
      setValidationPass(true);
    }
  }, [Miscellaneous, validationPass]);

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h5" align="center">
              How would you describe your overall spending habits?
              <Button onClick={handleOpenModal1}>
                <HelpOutlineIcon fontSize="small" />
              </Button>
            </Typography>
          </Box>
          <Box my="2rem" display="flex" justifyContent="center">
            <ToggleButtonGroup
              value={Miscellaneous}
              exclusive
              onChange={handleMiscellaneous}
              aria-label="Miscellaneous"
            >
              <ToggleButton
                value="M-much-below"
                size="large"
                aria-label="Much below average"
              >
                Frugal
              </ToggleButton>
              <ToggleButton
                value="M-below"
                size="large"
                aria-label="Below average"
              >
                Average
              </ToggleButton>
              <ToggleButton value="M-average" size="large" aria-label="Average">
                Spender
              </ToggleButton>
              <ToggleButton
                value="M-above"
                size="large"
                aria-label="Above average"
              >
                Big Spender
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stepper
            stepsNumber={9}
            actualStep={7}
            validation={validationPass}
            nextStep="userInfo"
            previousStep="flights"
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>{modalBody}</>
      </Modal>
    </div>
  );
}
