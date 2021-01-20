import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";


const Quiz = () => {
  
  const [container, setcontainer] = useState("");
  const [questions, setquestions] = useState("");
  const [answers, setanswers] = useState("");
  



  useEffect(() => {
    computerScience();
  }, []);

  const randomquestion =(x) => {
    x=Math.floor(Math.random() * 50 + 1)
    console.log(x)
  }

  const computerScience = () => { 
    fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple")
      .then((res) => res.json())
      .then((container) => {
        setcontainer(container);
        console.log(container.results[5].question);        
      });
  };
  render()
  return (
      <>
      <h3 className="questions">  </h3>
      <ul>
        <p></p>
      </ul> 
    </>
  
  );
};

export default Quiz;