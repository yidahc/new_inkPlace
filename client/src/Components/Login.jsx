import React from 'react'
import ReactDom from 'react-dom'
import LoginBox from './LoginBox'
import RegisterBox from './RegisterBox'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: true
    };
  }

  render() {

    return (
      <div>
      <div className="root-container">
        {this.state.isLoginOpen && <LoginBox/>}
        </div>
        <div>
        {this.state.isRegisterOpen && <RegisterBox/>}
        </div>
        </div>
    );
  }
}

export default Login;