import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Landing.module.css"
import { Container, TextField, Button } from "@material-ui/core";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router";

const LandingPage = ({ name, setName }) => {

  const history = useHistory();

  const handleSubmit = () => {
    history.push("/quiz")
  }


  return (
    <div className={classes.landing}>
      <Navbar />
      <Container className={classes.formContainer}>
        <form className={classes.form}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)} />

          <div className={classes.btn}>
            <Button variant="contained" onClick={handleSubmit}>Start Quiz</Button>
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;