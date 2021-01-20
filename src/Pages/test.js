import React from "react";

class Quiz extends React.Component {
  state = {

  }
  async componentDidMount() {
    const url="https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple";
    const response=await fetch(url)
    const data= await response.json();
    console.log(data);

  }
  render() {
    return (
      <div>

      </div>
    )
  }
}