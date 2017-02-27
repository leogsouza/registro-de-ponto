import React from 'react';
import {Table, Header} from 'semantic-ui-react';

class EntryList extends React.Component {

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
    const entries = this.props.entries;

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
            {this.props.days.map((day, idxDay) =>
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
