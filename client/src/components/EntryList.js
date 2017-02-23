import React from 'react';
import Client from './Client';

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
        {JSON.stringify(this.state.entries)/*(entry =>
          <p>{JSON.stringify(entry)}</p>)*/}
      </div>
    );
  }

}

export default EntryList;
