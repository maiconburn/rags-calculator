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

  console.log(props.validation);

  const [activeStep, setActiveStep] = React.useState(props.actualStep);

  const handleNext = () => {
    if (props.validation == true) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      router.push(props.nextStep, {
        shallow: true,
      });
    } else {
      alert("You must answer all questions to proceed!");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    router.push(props.previousStep, {
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
          disabled={activeStep === props.stepsNumber - 1}
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
