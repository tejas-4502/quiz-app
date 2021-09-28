import React from "react";
import "./Navbar.module.css"
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

const Navbar = () => {

  const history = useHistory();

  const handleClick = () => {
    alert("You have returned to Home Page");
    history.push("/");
  }

  return (
    <div>
      <nav>
        <div onClick={handleClick}>Quizzy</div>
        <ul>
          <li>
          </li>
          <li>
            <a href="https://github.com/Dipesh107/quizzy" target="_blank">
              <Button variant="contained">View On Github</Button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;