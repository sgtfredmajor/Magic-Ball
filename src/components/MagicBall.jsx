import React, { Component } from "react";
// import Quesions from "./Questions";


class MagicBall extends Component {
  state = {
    value: "",
    questions: ""
  };
  
  handleSubmit = async event => {
    event.preventDefault();
    const { question } = this.state;
    const response = await fetch(
      `https://8ball.delegator.com/magic/JSON/'${question}'`
      );
      
    const ballAnswer = await response.json();
       this.setState({
      userAnswer: ballAnswer.magic.answer,
  });
};

render() {
  const { userAnswer } = this.state;
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        <h1>The Magic 8 Ball</h1>
        <p>"Please ask a question"</p>
   
    <input type="text" 
    value={this.state.textInput} 
    placeholder="Enter Question:" 
    onChange={this.handleChange} 
    />
    </label>
    <button type="submit"></button>
    <p>Answer: {userAnswer}</p>
    </form>
    </div>
    );
  }
}

export default MagicBall;
