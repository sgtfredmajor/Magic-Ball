import React from 'react';
import styled from 'styled-components';
import '../App.css';

const divReply = styled.div`
  font-size: 2rem;
  `;

function userAnswers(props) {
  const {questions} = props;

  return (
    <divReply>
      <h2>{questions.magic.questions}?</h2>
      <h2>{questions.magic.answer}</h2>
    </divReply>
  );
}

export default userAnswers;
