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
        <table>
            <thead>
                <td>Data</td>
                <td>Ent1</td>
                <td>Sai1</td>
                <td>Ent2</td>
                <td>Sai2</td>
            </thead>
            <tbody>
                {Object.entries(this.state.entries).map((value, index) =>
                    <tr>
                        <td>{value[0]}</td>
                        {value[1].map(item =>
                            <td>{item}</td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    );
  }

}

export default EntryList;
