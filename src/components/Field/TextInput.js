import React from 'react'
import { Form } from 'semantic-ui-react'
import { Question } from './Question'

export const TextInput = ({ question, onChange }) => (
  <Form>
    <Form.Field>
      <Question text={`Question: ${question}`}/>
    </Form.Field>
    <Form.Input fluid onChange={(e, { value }) => onChange(value)}/>
  </Form>
)
