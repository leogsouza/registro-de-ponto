import React from 'react';
import Client from './Client';


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
          <td key={index}>{entry}</td>)
      )

    } else {
      const arr = Array.from(Array(4).keys());
      return (
        arr.map((item, index) => <td key={index}></td>)
      )
    }
  }

  render() {
    const entries = this.state.entries;
    console.log('olá', this.state.days);
    return (
      <div>
        <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Ent1</th>
                <th>Sai1</th>
                <th>Ent2</th>
                <th>Sai2</th>
              </tr>
            </thead>
            <tbody>
                {this.state.days.map((day, idxDay) =>
                    <tr key={idxDay}>
                        <td>{day}</td>
                        {this.renderTimeEntries(entries, day)}
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    );
  }

}

export default EntryList;
