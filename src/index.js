import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RegisterComp from './components/RegisterComp/RegisterCompScp'
import UserPageComp from './components/UserPageComp/UserPageCompScp'


class App extends Component {

  state = {
    isAuth: false,
    userInfo : {}
  }


  authorisedFunc = (obj) => {
    
    this.setState({
      isAuth: true,
      userInfo : {...obj}
    })
  }


  render() {
    return (
      <div className="App">

        {(!this.state.isAuth) ? <RegisterComp authorisedFunc={this.authorisedFunc} />  : <UserPageComp userInfoObj={this.state.userInfo} />}


      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

