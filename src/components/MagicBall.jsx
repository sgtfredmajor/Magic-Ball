import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';

const Input = styled.input`
  background-color: rgb(241, 236, 228);
  border: none;
  border-bottom: 1.5px solid rgb(38, 38, 39);
  font-size: 2rem;

  &:focus {
    online: none;
  }
`;

const Button = styled.button`
  background: green;
  color: white;
  font-color: black;
  font-size: 2rem;
  border: none;
  border-radius: 3.5px;
  margin 20px;
  width: 100px;
  height: 40px;

&:focus {
  online:none;
}
`;

const Reply = styled.p`
  display: flex;
  text-align: center;
  font-size: 1.6rem;
`;

const Eight = styled.h1`
  font-size: 6rem;
  text-align: center;
`;

const Question = styled.p`
  font-size: 2rem;
`;

class MagicBall extends Component {
  state = {
    value: '',
    questions: [],
  };

  handleSubmit = async (event) => {
    const {questions} = this.state;
    const response = await fetch(
      `https://8ball.delegator.com/magic/JSON/'${questions}'`
    );

    const ballAnswer = await response.json();
    this.setState({
      userAnswer: ballAnswer.magic.answer,
    });
  };

  render() {
    const {userAnswers} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Eight>The Magic-8-Ball</Eight>
        <Question>"Please ask a question"</Question>

        <Input
          type="text"
          value={this.state.textInput}
          placeholder="Enter Question:"
          onChange={this.handleChange}
        />
        <Button type="Submit"></Button>
        <Reply>Answer: {userAnswers}</Reply>
      </form>
    );
  }
}

export default MagicBall;
