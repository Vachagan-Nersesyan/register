import { Component } from 'react'
import './RegisterCompStl.css'


class RegisterComp extends Component {

    state = {
        userName: '',
        userPassword: '',
        userEmail: '',
        errorText: ''
    }

    userNameFunc = (e) => {
        this.setState({
            userName: e.currentTarget.value
        })
    }

    userPasswordFunc = (e) => {
        this.setState({
            userPassword: e.currentTarget.value
        })
    }

    userEmailFunc = (e) => {
        this.setState({
            userEmail: e.currentTarget.value
        })
    }

    authorisedValidFunc() {


        if (!this.state.userName || this.state.userName.length < 2) {
            return this.setState({ errorText: 'Please Write Your Name Again' })

        }

        if (!this.state.userPassword || this.state.userPassword.length < 2) {
            return this.setState({ errorText: 'Please Write Your Password Again' })

        }

        if (!this.state.userEmail || this.state.userEmail.length < 2) {
            return this.setState({ errorText: 'Please Write Your Email Again' })

        }


        return this.props.authorisedFunc({ ...this.state })
    }


    render() {


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
                        <input onChange={(e) => this.userNameFunc(e)} placeholder='Please write your name' type='text' />

                    </div>
                    <div className='register_content_container_user_name_item'>
                        <input onChange={(e) => this.userEmailFunc(e)} placeholder='Please write your name' type='email' />

                    </div>
                    <div className='register_content_container_user_name_item'>
                        <input onChange={(e) => this.userPasswordFunc(e)} type='password' />

                    </div>
                    {this.state.errorText ? <div className='register_content_container_error_txt'>
                        {this.state.errorText}
                    </div> : null}


                    <div className='register_content_container_btn'>
                        <button onClick={() => this.authorisedValidFunc()}>REGISTER</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterComp