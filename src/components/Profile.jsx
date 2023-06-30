import './profile.css'
import { useContext } from 'react'
import { Context } from '../context/userContext/Context'
import userImage from '../assets/userImage.jpg'
function Profile() {
    const { user } = useContext(Context);
  return (
    <div>
        <div className="profile">
            <div className="userImage-wrapper">
                <img className= "userImage" src={userImage} alt="userImage" />
            </div>
            <div className="userDetails">
                <h2>Username</h2>
                <p>{user.Username}</p>
                <h2>Email</h2>
                <p>{user.Email}</p>
                <h2>User-Id</h2>
                <p>{user.UserID}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
