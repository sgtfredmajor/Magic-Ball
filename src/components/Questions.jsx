import React from 'react';
import Answers from './Answers';
import '../App.css';

function Questions(props) {
  const {questions} = props;

  return (
    <div>
      {questions.map((questions) => (
        <Answers questions={questions} />
      ))}
    </div>
  );
}

export default Questions;
