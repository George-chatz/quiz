import React from "react";
import "./App.css"
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Pages/Home.js"
import "./Pages/Home.css"
import Quiz from "./Pages/Quiz.js"
import "./Pages/Quiz.css"


export default function App() {
  return (
    <Router>
      <nav className="Navbar">
        <Link className="Home0 " to="/Home">Home</Link>
        <Link to="/Quiz">Quiz</Link>
      </nav>
      <Switch>
        <Route path="/Quiz">
          <Quiz />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>  
      </Switch>
    </Router>
  );
}



