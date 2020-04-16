import React, {Component} from 'react';
import styled from 'styled-components';

const RedEightBall = styled.div`
  background-image: radial-gradient(circle, #428b8b, rgb(255, 0, 0));
  margin: 100px auto;
  width: 700px;
  height: 700px;
  max-width: 1000px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

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
  background-color: rgb(241, 236, 228);
  font-color: black;
  font-size: 2rem;
  border: none;
  border-radius: 3.5px;
  margin 20px;
  width: 120px;
  height: 40px;

&:focus {
  online:none;
}
`;

const Reply = styled.p`
  font-size: 2rem;
`;

const Eight = styled.h1`
  font-size: 5rem;
  justify-content: center;
`;

const Question = styled.p`
  font-size: 2.5rem;
`;

class MagicBall extends Component {
  state = {
    value: '',
    question: ''
  };
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {question} = this.state;
    const response = await fetch(
      `https://8ball.delegator.com/magic/JSON/'${question}'`
    );

    const ballAnswer = await response.json();
    this.setState({
      userAnswer: ballAnswer.magic.answer,
    });
  };

  render() {
    const {userAnswer} = this.state;

    return (
      <RedEightBall className="MagicBall">
        <form onSubmit={this.handleSubmit}>
          <Eight>Big-Red Magic Ball</Eight>
          <Question> Ask a question!</Question>
          <Input
            type="text"
            value={this.state.value}
            placeholder="Enter Your Question"
            onChange={this.handleChange}
          />
          <Button type="Submit">Shake</Button>
          <Reply> {userAnswer} </Reply>
        </form>
      </RedEightBall>
    );
  }
}

export default MagicBall;
