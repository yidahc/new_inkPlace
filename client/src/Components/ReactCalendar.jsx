import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

class ReactCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
          excludeDates={[new Date(), addDays(new Date(), 3)]}
          placeholderText="Choose date for appointment"
        />
      </div>
    );
  }
}

export default ReactCalendar;


/*
  <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
*/