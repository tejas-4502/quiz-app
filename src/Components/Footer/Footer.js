import classes from "./Footer.module.css"
import React from "react";

const Footer = () => {

  const d = new Date();
  const getyear = d.getFullYear();

  return (
    <footer className={classes.footer}>
      &#9400; Copyright {getyear} | DIPESH PATIL | Web Developer
    </footer>
  );
};

export default Footer