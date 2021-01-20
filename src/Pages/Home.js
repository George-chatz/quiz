
import React from "react";
import { BrowserRouter as Router,Link} from "react-router-dom";



function Home() {
    return <p className="Home">
      A simple quiz game with diferent categories
      <br></br>
      <Router>
      <button className="Play" >Let's Play!
        <Link to="./Pages/Quiz.js"></Link>
      </button>
      </Router>
      
    </p>;
  }





export default Home;