import React from 'react';
import Client from './Client';
import {Table, Header} from 'semantic-ui-react';

class EntryList extends React.Component {

  constructor(props) {
    super(props); // required

    this.state = {
      entries: [],
      days: []
    };
  }

  componentDidMount() {
    Client.getEntries().then((response) => {

      this.setState({entries: response});
      const days = Client.allDays();

      this.setState({days: days});
    });
  }

  renderTimeEntries(entries, day) {
    if(entries[day]) {
      return (
        entries[day].map((entry, index) =>
          <Table.Cell key={index}>{entry}</Table.Cell>)
      )

    } else {
      const arr = Array.from(Array(4).keys());
      return (
        arr.map((item, index) => <Table.Cell key={index}></Table.Cell>)
      )
    }
  }

  render() {
    const entries = this.state.entries;
    
    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Data</Table.HeaderCell>
              <Table.HeaderCell>Ent1</Table.HeaderCell>
              <Table.HeaderCell>Sai1</Table.HeaderCell>
              <Table.HeaderCell>Ent2</Table.HeaderCell>
              <Table.HeaderCell>Sai2</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.days.map((day, idxDay) =>
                <Table.Row key={idxDay}>
                    <Table.Cell>
                      <Header as="h4">{day}</Header>
                    </Table.Cell>
                    {this.renderTimeEntries(entries, day)}
                </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    );
  }

}

export default EntryList;
