import React from 'react';
import ReactDom from 'react-dom';
import LoginBox from './Components/LoginBox.jsx';
import Register from './Components/Register.jsx';
export default class Home extends React.Component {
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
            <Login/>
          </div>
          <div className="controller">
            <Register/>
          </div>
          </div>
          <div className="box-container">
          
          </div>
          </div>
        )}
    }




     