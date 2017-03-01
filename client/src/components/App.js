import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react';
import './App.css';
import EntryList from './EntryList';
import EntryForm from './EntryForm';
import moment from 'moment';
//import update from 'immutability-helper'

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      time_entry: null,
      entries: [],
      days: [],
      moment: moment(),
      weeks: moment.weekdaysShort(),
      months: moment.monthsShort()
    }
  }

  componentWillMount() {
    const Client = this.props.Client;
    Client.getEntries().then((response) => {
      const entries = response;
      this.setState({entries});
      const days = Client.allDays();
      this.setState({days});
    });
  }

  handleSubmit(obj) {

    //const countEntries = this.state.entries.length;
    //const id = countEntries + 1;
    const entry = {time_entry: obj.time_entry};

    this.addNewEntry(entry);
  }

  addNewEntry(entry) {
    const Client = this.props.Client;
    Client.saveEntry(entry).then((response) => {
        this.setState({entries: response});
        const days = Client.allDays();
        this.setState({days});
    });
  }

  render() {
    return (
      <Container text>
        <Header as="h2">Registro de Ponto</Header>
        <EntryForm moment={this.state.moment} time_entry={this.state.time_entry} onFormSubmit={this.handleSubmit.bind(this)} />
        <EntryList entries={this.state.entries} days={this.state.days} />
      </Container>
    );
  }
}

export default App;
