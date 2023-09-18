
import { Component } from 'react'
import './UserPageCompStl.css'


class UserPageComp extends Component {
    render() {

        const { userInfoObj ,logoutFun } = this.props

        return (
            <div className='userinfo_content'>
                <div className='userinfo_content_container'>
                    <button onClick={logoutFun}>Logout</button>
                    <div className='userinfo_content_container_in_item'>
                        {userInfoObj.userName}
                    </div>
                </div>

            </div>
        )
    }
}

export default UserPageComp