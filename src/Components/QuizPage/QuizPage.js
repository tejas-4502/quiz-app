import classes from "./QuizPage.module.css"
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Button } from "@material-ui/core"
import questions from "./Questions";
import { useHistory } from "react-router";

const QuizPage = () => {


  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const history = useHistory();

  const handleOptionClicked = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const handleGoBack = () => {
    history.push("/")
  }

  return (
    <div>
      <div>
        <Navbar />

        {showScore ? (
          <div className={classes.scoreSection} >
            {score >= 5 ? (
              <div>
                <img src={process.env.PUBLIC_URL + "/assests/congratulations.png"} alt="" />
                <h1 style={{ textAlign: "center" }}>Congratulations!!! You Have Scored {score}/10</h1>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <img style={{ width: "170px" }} src={process.env.PUBLIC_URL + "/assests/oops.png"} alt="" />
                <h2 style={{ textAlign: "center" }}>Better luck next time!!! <br /> You Have Scored {score}/10</h2>
              </div>
            )
            }
            <div style={{ display: "flex" }}>
              <div className={classes.btns}>
                <Button variant="contained" onClick={handleGoBack} color={"secondary"}>Exit</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.quizSection}>
            <div className={classes.card}>
              <div className={classes.questionSection}>
                <div style={{ display: "flex" }}>
                  <div><span className={classes.question}>Question {currentQuestion + 1}</span>/10</div>
                  <div style={{ margin: "0 0 0 20px" }}>Timer</div>
                </div>
                <hr />
                <p><b>Que.</b> {questions[currentQuestion].questionText}</p>
              </div>
              <div className={classes.optionSection}>
                {questions[currentQuestion].answerOptions.map((answerOption) =>
                  <Button style={{ margin: "0 0 10px 0", display: "block" }} onClick={() => handleOptionClicked(answerOption.isCorrect)} variant="contained">{answerOption.answerText}</Button>)}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;