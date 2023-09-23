import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RegisterComp from './components/RegisterComp/RegisterCompScp'
import UserPageComp from './components/UserPageComp/UserPageCompScp'

import LocalStorageServise from './services/LocalStorageServices'

// import CounterComp from './components/CounterComp/CounterScp'


const App = (props) => {

  const storedData = LocalStorageServise.getUserData()

  const [isRegistred, setIsRegistred] = useState(true)
  const [userData, setUserData] = useState(storedData)


  const handleRegistration = (uData) => {

    
    LocalStorageServise.saveUserData(uData)
    setUserData(uData)
    setIsRegistred(false)
  }

  const logOutFunc = () => {
    LocalStorageServise.clearUserData()
    setIsRegistred(true)
  }


  return (
    <div className="App">


      {(isRegistred) ?
        <RegisterComp handleRegistration={handleRegistration} /> :
        <UserPageComp logOutFunc={logOutFunc} userData={userData} />}


    </div>

    // <CounterComp />

  );


}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

