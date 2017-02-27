import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react';
import './App.css';
import EntryList from './EntryList';
import EntryForm from './EntryForm';


class App extends Component {
  render() {
    return (
      <Container text>
        <Header as="h2">Registro de Ponto</Header>
        <EntryForm />
        <EntryList />
      </Container>
    );
  }
}

export default App;
