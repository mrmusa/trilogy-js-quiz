import React, { Component } from 'react'
import { Divider, Segment, Progress, Button, Icon } from 'semantic-ui-react'
import Field from './Field'
import Score from './Score'

export default class Quiz extends Component {
  state = { current: 0, compelted: false, responses: [] }
  nextQuestion = () => {
    this.setState((prevState, props) => (
      {
        current: prevState.current + 1,
        response: undefined,
        responses: [
          ...prevState.responses,
          {
            ...props.questions[prevState.current],
            response: prevState.response
          }
        ]
      }
    ))
  }
  handleChange = response => this.setState({ response })

  render() {
    const { questions = [] } = this.props
    if (this.state.current < questions.length) {
      const question = questions[this.state.current]
      const QuestionField = Field[question.type]

      return (
        <Segment>
          <QuestionField {...question} onChange={this.handleChange}/>
          <Divider/>
          <Button
            disabled={this.state.response === undefined}
            onClick={this.nextQuestion}
            icon primary
            labelPosition='right'>
            {
              this.state.current + 1 === questions.length ? 'Submit' : 'Next'
            }
            <Icon name='right arrow'/>
          </Button>
          <Divider/>
          <Progress value={this.state.current + 1} total={questions.length} progress='ratio' color='blue'/>
        </Segment>
      )
    }

    return (
      <Score responses={this.state.responses}/>
    );
  }
}
