import React, {Component} from 'react';
import {DatetimePickerTrigger} from 'rc-datetime-picker';
import moment from 'moment';
import {Form, Button, Input} from 'semantic-ui-react';

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
    this.props.onFormSubmit({time_entry: this.state.moment.format('YYYY-MM-DD HH:mm')});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <DatetimePickerTrigger
          moment={this.state.moment} weeks={this.state.weeks} onChange={this.handleChange} >
          <Input icon="calendar" value={this.state.moment.format('DD-MM-YYYY HH:mm')} readOnly/>
        </DatetimePickerTrigger>
        <p><Button type="submit">Salvar</Button></p>

      </Form>
    );
  }

}

export default EntryForm;
