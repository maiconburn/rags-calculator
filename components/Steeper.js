import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import styles from "../styles/components/Steeper.module.scss";

export default function Stepper(props) {
  const router = useRouter();
  const theme = useTheme();

  console.log(props.actualStep);

  const lastStep = props.actualStep - 1;
  const nextStep = props.actualStep + 1;

  const [activeStep, setActiveStep] = React.useState();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    router.push("/screening/?currentQuestion=" + nextStep, {
      shallow: true,
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    router.push("/screening/?currentQuestion=" + lastStep, {
      shallow: true,
    });
  };

  return (
    <MobileStepper
      variant="text"
      steps={props.stepsNumber}
      position="static"
      activeStep={activeStep}
      className={styles.steeper}
      nextButton={
        <Button
          size="large"
          onClick={handleNext}
          color="primary"
          disabled={true}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="large"
          color="primary"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
