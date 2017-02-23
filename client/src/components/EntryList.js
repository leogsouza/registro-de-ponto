import React from 'react';
import Client from './Client';
import moment from 'moment';
class EntryList extends React.Component {

  constructor(props) {
    super(props); // required

    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    Client.getEntries().then((response) => {
      this.setState({entries: response});
    })
  }



  render() {
    return (
      <div>
        {this.state.entries.map(entry =>
          <p>{entry.time_entry}</p>)}
      </div>
    );
  }

}

export default EntryList;
