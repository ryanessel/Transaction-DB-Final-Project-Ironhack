import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

export default function Navbar() {

const {
  isLoggedIn,
  user,
  logOutUser
} = useContext(AuthContext)


  return (
    <div className='navbar'>
        <div className='navBarBox'>
      <ul>

      {isLoggedIn && 
        <div className='navBarCenter'> 
         <Link to={`/parts`}><button className='partsBtn'>Parts List/Add Parts </button></Link>   
         <Link to={`/quotes`}><button className='quotesBtn'>Quote List </button></Link> 
         <button onClick={logOutUser}>Logout</button>
         <span>CURRENT USER: {user && user.name}</span> 
        </div>
      }

      {!isLoggedIn && 
        <div className='navBarCenter'>
         <Link to={`/login`}><button className='loginPageBtn'>Login </button></Link>   
         <Link to={`/signup`}><button className='partsBtn'>Sign Up</button></Link>  
        </div>
      }
        </ul>
        </div>

    </div>
  )
}
