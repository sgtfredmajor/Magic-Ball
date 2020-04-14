import React, { Component } from "react";
// import Quesions from "./Questions";


class MagicBall extends Component {
  state = {
    value: "",
    questions: []
  };
  
  handleSubmit = async event => {
    const { questions } = this.state;
    const response = await fetch(
      `https://8ball.delegator.com/magic/JSON/'${questions}'`
      );

    const ballAnswer = await response.json();
       this.setState({
      userAnswer: ballAnswer.magic.answer,
  });
};

render() {
  const { userAnswers } = this.state;
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
    <button type="Submit"></button>
    <p>Answer: {userAnswers}</p>
    </form>
    </div>
    );
  }
}

export default MagicBall;
