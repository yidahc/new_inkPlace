import React from 'react';
import ReactDom from 'react-dom';
import './home.css'
import Example from './Carousel.jsx';
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
            
          <div className='root-container'>
          <Example />
          </div>
        )}
    }

export default Home;
