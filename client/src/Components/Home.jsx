import React from 'react';
import ReactDom from 'react-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    submitLogin(e) {
        
    }
    render(){
        return (
          <div className="root-container"> 
        
          <div className="box-controller">
          <div className="controller">
            Login
          </div>
          <div className="controller">
            register
          </div>
          </div>
          <div className="box-container">
          
          </div>
          </div>
        )}
    }

    class LoginBox extends React.Component {
      constructor(props) {
        super(props);
        this.state = {  };
      }
     
      render() {
        return(
          <div className="inner-container">
           <div className="header">
          Login
          </div>
          <div className="box">
          <div className="input-group">
          <label htmlFor="userName"> username</label>
          <input type="text" name="username" className="login-input" placeholder="username"/>
          </div>
          
          <div className="input-group">
          <label htmlFor="password">password</label>
          <input type="text" name="password" classNAme="login-input" placeholder="password"/>
          </div>
          <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
          </div>

          </div>
        )
      }
    }




     class Register extends  React.Component {
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
          Register
          </div>
          <div className="box">
          <div className="input-group">
          <label htmlFor="userName">username</label>
          <input type="text" name="username" placeholder="username"/>
          </div>
          
          <div className="input-group">
          <label htmlFor="password"> password</label>
          <input type="text" name="password" placeholder="passweord"/>
          </div>
          <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
          </div>

          </div>
        )
      }
    }

export default Home ;
