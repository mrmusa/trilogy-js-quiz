import React from 'react'
import { Message } from 'semantic-ui-react'
import { Question } from './Field/Question'

const Score = ({ responses = [] }) => {
  const correct = responses.reduce((result, { response, answer }) =>
      response === answer
        ? result + 1
        : result,
    0);

  return [
    responses.map(({ question, response, answer }, index) => (
      <Message key={index} color={response === answer ? 'green' : 'red'}>
        <Message.Header>
          <Question text={`Question: ${question}`}/>
        </Message.Header>
        <p>
          Your response: {String(response)}
        </p>
        <p>
          Correct answer: {String(answer)}
        </p>
      </Message>
    )),
    <Message key={responses.length} color='blue'>
      <Message.Header>
        You answered {correct}/{responses.length} correctly.
      </Message.Header>
    </Message>
  ]
}

export default Score