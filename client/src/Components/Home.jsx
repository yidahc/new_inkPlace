import React from 'react';
import ReactDom from 'react-dom';
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
            
          <div>
          <Example />
          </div>
        )}
    }

export default Home;
