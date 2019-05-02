import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
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
              maxHeight: 100,
            },
          };
        },
      },
    }}
  >
    <DropdownItem>Right Arm</DropdownItem>
    <DropdownItem>Left Arm</DropdownItem>
    <DropdownItem>Right Leg</DropdownItem>
    <DropdownItem>Left Leg</DropdownItem>
    <DropdownItem>Neck</DropdownItem>
    <DropdownItem>Body</DropdownItem>
  </DropdownMenu>
</Dropdown>

        <FormGroup>
          <Label for='message'>Message:</Label>
          <Input
            type='textarea'
            name='message'
            onChange={this.handleChange} />
        </FormGroup>
      </Form>
    );
  }
}

export default Book;






/*

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

 const Book = () => {
   return (
   <div>
    <form>
   <div className="form-group margin-right-5 col-md-4">
     <label htmlFor="emailInput">Email address</label>
     <input
       type="email"
       className="form-control"
       id="email"
       placeholder="name@example.com">
       </input>
   </div>
   <div className="form-group margin-right-5 col-md-4">
     <label htmlFor="bodypart">Where you want your Tattoo?</label>
     <textarea
       className="form-control"
       id="bodyPart"
       rows="3"></textarea>
   </div>

   <div className="form-group margin-right-5 col-md-3">
    <label htmlFor="size">Whats the size?</label>
    <select
      className="form-control"
      id="size">
      <option>Small</option>
      <option>Medium</option>
      <option>Big</option>

    </select>
  </div>

   <div className="form-group margin-right-5 col-md-4">
     <label htmlFor="comments">Any extra Comments ? </label>
     <textarea
       className="form-control"
       id="comment"
       rows="3"></textarea>
   </div>

 </form>

  </div>)

};
 export default Book;
*/
