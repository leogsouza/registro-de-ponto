import React, {Component} from 'react';
import {DatetimePicker} from 'rc-datetime-picker';
import moment from 'moment';
import {Form, Button} from 'semantic-ui-react';

class EntryForm extends Component {

  constructor(props) {
    super(props);

    moment.locale('pt-br');
    this.state = {
      moment: moment(),
      weeks: moment.weekdaysShort(),
      months: moment.monthsShort()
    };
  }

  handleChange = (moment) => {

    this.setState({moment});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.moment.format('YYYY-MM-DD HH:mm'));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <DatetimePicker
          moment={this.state.moment} weeks={this.state.weeks} onChange={this.handleChange} />
        <p><Button type="submit">Salvar</Button></p>

      </Form>
    );
  }

}

export default EntryForm;
