
import React, { useState, useEffect } from "react";

const Quiz = () => {
  
  const [container, setContainer] = useState([]);
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);
  const [loading,setLoading] =useState(true);
  const [randomnum,setRandom] = useState();

  useEffect(() => {
    computerScience();
    randomNum();
    
  }, []);

  

  const computerScience = () => { 
    fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple")
      .then((res) =>  res.json())
      .then(
        (data) => {
          setContainer(data)
          console.log(data)
          setAnswers(data)
          console.log(answers)
          setLoading(false)  
        },
      )
  };

  const randomNum = () => {
    const random= Math.floor(Math.random()* 50)
    setRandom(random)
  }
  
  const handleButton = () => {

  }

  

  if ( loading === true) {
    return (<div>Loading Questions</div>)
  }
  else 
  return(
    <>
    <div className="container">
      <h3>{container.results[randomnum].question}</h3>
      <div className='answers'>
      <ul>
        {container.results[randomnum].incorrect_answers.map((incorrect_answers, index) => (
		    <button>{incorrect_answers}</button>
	    ))}
      <button onClick={handleButton}>{container.results[randomnum].correct_answer}</button>
      </ul>
    </div>
    <div>
      
    </div>
  
    </div>
    </>
  )
};



export default Quiz;