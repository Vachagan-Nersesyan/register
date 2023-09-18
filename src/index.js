import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RegisterComp from './components/RegisterComp/RegisterCompScp'
import UserPageComp from './components/UserPageComp/UserPageCompScp'


class App extends Component {

  state = {
    isAuth: localStorage.getItem("user") !== null ? true : false,
    userInfo : localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : {},
    isInLclStrg:false
  }


  authorisedFunc = (obj) => {
    
    this.setState({
      isAuth: true,
      userInfo : {...obj},
    })
    
    localStorage.setItem('user',JSON.stringify({...obj}))
  }

  logoutFun = () => {
    localStorage.removeItem('user')
    this.setState({isAuth  :false})
  }


  render() {

    debugger

    console.log(localStorage.getItem("user"))

    return (
      <div className="App">
        

        {(!this.state.isAuth) ? <RegisterComp authorisedFunc={this.authorisedFunc} />  : <UserPageComp logoutFun={this.logoutFun} userInfoObj={this.state.userInfo} />}


      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

