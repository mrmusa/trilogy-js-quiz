import React from 'react'
import { Form } from 'semantic-ui-react'
import { Question } from './Question'

export const MultipleChoice = ({ question, options, onChange }) => (
  <Form>
    <Form.Field>
      <Question text={`Question: ${question}`}/>
    </Form.Field>
    <Form.Select options={options} placeholder='Choose One' onChange={(e, { value }) => onChange(value)}/>
  </Form>
)
