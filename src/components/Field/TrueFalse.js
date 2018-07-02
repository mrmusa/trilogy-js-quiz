import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import { Question } from './Question'

export class TrueFalse extends Component {
  state = {}
  handleChange = (e, { value }) => {
    this.props.onChange(value)
    this.setState({ value })
  }

  render() {
    const { question } = this.props

    return (
      <Form>
        <Form.Field>
          <Question text={`Question: ${question}`}/>
        </Form.Field>
        <Form.Field>
          <Radio
            label='True'
            name='radioGroup'
            value={true}
            checked={this.state.value === true}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='False'
            name='radioGroup'
            value={false}
            checked={this.state.value === false}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}
