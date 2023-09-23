import { useState } from 'react'
import './RegisterCompStl.css'

import { validatorFunc } from '../utils/validators'


const RegisterComp = ({handleRegistration}) => {



    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [errorText, setErrorText] = useState('')


    const authorisedValidFunc = () => {
        
            
        if (validatorFunc(userName, 'name')) {
            return setErrorText(validatorFunc(userName, 'name'))
        }

        if (validatorFunc(userPassword, 'password')) {
            return setErrorText(validatorFunc(userPassword, 'password'))
        }

        if (validatorFunc(userEmail, 'email')) {
            return setErrorText(validatorFunc(userEmail, 'email'))
        }


        return handleRegistration({userName,userPassword,userEmail})

    }


    return (
        <div className='register_content'>
            <div className='register_content_container'>
                <div className='register_content_container_title'>
                    Welcome
                </div>
                <div className='register_content_container_txt'>
                    Please Login
                </div>
                <div className='register_content_container_user_name_item'>
                    <input onChange={(e) => setUserName(e.target.value)} placeholder='Please write your name' type='text' />

                </div>
                <div className='register_content_container_user_name_item'>
                    <input onChange={(e) => setUserEmail(e.target.value)} placeholder='Please write your name' type='email' />

                </div>
                <div className='register_content_container_user_name_item'>
                    <input onChange={(e) => setUserPassword(e.target.value)} type='password' />

                </div>
                {errorText ? <div className='register_content_container_error_txt'>
                    {errorText}
                </div> : null}


                <div className='register_content_container_btn'>
                    <button onClick={() => authorisedValidFunc()}>REGISTER</button>

                </div>
            </div>
        </div>
    )

}

export default RegisterComp