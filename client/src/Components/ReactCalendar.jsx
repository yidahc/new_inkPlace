import React, { Component } from 'react';
import Calendar from 'react-calendar';
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
    selected={this.state.startDate}
    onChange={this.handleChange}
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