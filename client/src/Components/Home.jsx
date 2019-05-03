import React from 'react';
import ReactDom from 'react-dom';
import LoginBox from './LoginBox.js';
import Register from './Register.js'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    submitLogin(e) {
        
    }
    submitRegister(e) {
        
    }
    render(){
        return (
          <div className="root-container"> 
        
          <div className="box-controller">
          <div className="controller">
            <LoginBox />
          </div>
          <div className="controller">
            <Register />
          </div>
          </div>
          <div className="box-container">
          
          </div>
          </div>
        )}
    }

export default Home;
