import React from 'react';

function userAnswers (props) {
    const { questions } = props;

    return (
        <div>
            <h2>{questions.magic.questions}?</h2>
            <h2>{questions.magic.answer}</h2>
        </div>
    );
};

export default userAnswers;