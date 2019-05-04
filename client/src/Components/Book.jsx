import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import ReactCalendar from './ReactCalendar.jsx'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
require("babel-polyfill");

class Book extends Component{
  constructor (){
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
      dropdownOpen: false,
    }
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message } = this.state

    const from = await axios.post('/api/form', {
      name,
      email,
      message
    })
}
  render(){
    return(
      <Form onSubmit={this.handleSubmit} style={{ width: '600px'}}>
        <FormGroup>
          <Label for='name'>Name:</Label>
          <Input
            type='name'
            name='name'
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='email'>Email:</Label>
          <Input
            type='email'
            name='email'
            onChange={this.handleChange} />
        </FormGroup>
         
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle>
    Body Part
  </DropdownToggle>
  <DropdownMenu
    modifiers={{
      setMaxHeight: {
        enabled: true,
        order: 890,
        fn: (data) => {
          return {
            ...data,
            styles: {
              ...data.styles,
              overflow: 'auto',
              maxHeight: 300,
            },
          };
        },
      },
    }}
  >

    <DropdownItem>---</DropdownItem>
    <DropdownItem>Calf</DropdownItem>
    <DropdownItem>Chest</DropdownItem>
    <DropdownItem>Foot</DropdownItem>
    <DropdownItem>Fore Arm</DropdownItem>
    <DropdownItem>Full Back</DropdownItem>
    <DropdownItem>Full Sleeve</DropdownItem>
    <DropdownItem>Half Sleeve</DropdownItem>
    <DropdownItem>Leg</DropdownItem>
    <DropdownItem>Lower Back</DropdownItem>
    <DropdownItem>Ribs</DropdownItem>
    <DropdownItem>Stomach</DropdownItem>
    <DropdownItem>Upper Arm</DropdownItem>
    <DropdownItem>Upper Back</DropdownItem>
    <DropdownItem>Lower Arm</DropdownItem>
    <DropdownItem>Hip</DropdownItem>
    <DropdownItem>Wrist</DropdownItem>
    <DropdownItem>Ankle</DropdownItem>
    <DropdownItem>Other</DropdownItem>
    
  </DropdownMenu>
</Dropdown>
<ReactCalendar />
        <FormGroup>
          <Label for='message'>Message:</Label>
          <Input
            type='textarea'
            name='message'
            onChange={this.handleChange} />
        </FormGroup>
        <Button>SUBMIT</Button>
      </Form>
    );
  }
}

export default Book;


