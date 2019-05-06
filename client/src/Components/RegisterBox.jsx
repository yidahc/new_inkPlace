import React, {Component} from 'react';

class RegisterBox extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    submitRegister(e) {
      
    }

    render() {
      return(
        <div className="inner-container">
        <div className="header">
        
        </div>
        <div className="box">
        <div className="input-group">
        <label htmlFor="userName">username</label>
        
        <input 
        type="text" 
        name="username"
        className="login-input"
        placeholder="username"/>
        </div>
        
        <div className="input-grouṕ">
        <label htmlFor="email">Email</label>
        <input type="text" name="email"
        className="login-input" placeholder="Email" /> 
        </div>

        <div className="input-group">
        <label htmlFor="password">Password</label>
        <input 
        type="Password" 
        name="Password" 
        className="login-i9nput"
        placeholder="Passweord"/>
        </div>
        <button 
        type="button" 
        className="login-btn" 
        onClick={this.submitRegister.bind(this)}>Register</button>
        </div>

        </div>
      )
    }
  }

  export default RegisterBox;

