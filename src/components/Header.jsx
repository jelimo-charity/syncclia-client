import  { Link } from 'react-router-dom'
import './header.css'
import { useContext } from 'react'
import { Context } from '../context/userContext/Context'
function Header() {
  const { user, dispatch } = useContext(Context)
  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  // console.log(user)

  return (
    <div className='navlinks'>
        <Link className='link' to="/">Home</Link>
        <Link className='link'to="/about">About</Link>
        <Link className='link' to="/register">Register</Link>
      {
        user && (
        <>
          <Link className='link' to="/blogs">Blogs</Link>
          <Link className='link' to="/actions">Actions</Link>
          <Link className='link' onClick={handleLogout} >Logout</Link>
        </>
        )
      }
        


        

      
    </div>
  )
}

export default Header
