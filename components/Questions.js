import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import questionsList from "../json/questions.json";
import { useRouter } from "next/router";
import Stepper from "../components/Steeper";
import styles from "../styles/Home.module.scss";

export default function GetStarted(props) {
  const router = useRouter();

  let { currentQuestion } = router.query;

  if (!currentQuestion) {
    currentQuestion = props.currentQuestion;
  }

  const question = questionsList[currentQuestion];
  const nextQuestion =
    question.id + 1 == questionsList.length ? 0 : question.id + 1;

  let nextUrl = "";

  if (questionsList.length == question.id + 1) {
    nextUrl = () => router.push("/table-project");
  } else {
    nextUrl = () =>
      router.push("/screening/?currentQuestion=" + nextQuestion, {
        shallow: true,
      });
  }

  return (
    <Container className={styles.intro}>
      <Box>
        <Grid
          className={styles.introText}
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Typography className={styles.questionsText} variant="h3">
              {question.text}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid container xs={6}>
            {question.options.map((value) => (
              <Grid
                container
                justify="center"
                sm={12 / question.options.length}
                xs="12"
              >
                <Button
                  color="primary"
                  onClick={nextUrl}
                  className={styles.questionsButton}
                  variant="contained"
                  size="large"
                >
                  {value}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Stepper
            actualStep={question.id}
            stepsNumber={questionsList.length}
            className={styles.stepper}
          />
        </Grid>
      </Box>
    </Container>
  );
}
