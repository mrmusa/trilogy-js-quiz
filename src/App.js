import React, { Component } from 'react';
import { Image, Segment, Container } from 'semantic-ui-react'
import Quiz from './components/Quiz';
import questions from './questions.json'

class App extends Component {
  render() {
    return (
      <Container>
        <Segment>
          <Image src={process.env.PUBLIC_URL + '/logo.svg'} size='medium' />
        </Segment>
        <Quiz questions={questions}/>
      </Container>
    );
  }
}

export default App;
