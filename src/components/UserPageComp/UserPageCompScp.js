
import './UserPageCompStl.css'


const UserPageComp = ({logOutFunc , userData}) => {


    return (
        <div className='userinfo_content'>
            <div className='userinfo_content_container'>
                <button onClick={logOutFunc}>Logout</button>
                <div className='userinfo_content_container_in_item'>
                    {userData.userName}
                </div>
            </div>

        </div>
    )

}

export default UserPageComp