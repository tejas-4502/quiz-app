import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import QuizPage from './Components/QuizPage/QuizPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");

  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage name={name} setName={setName} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/quiz">
            <QuizPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
