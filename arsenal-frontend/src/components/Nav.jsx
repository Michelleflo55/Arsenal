import { Link } from 'react-router-dom'
import image from '../Arsenal-4.png'


const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav >
        <h3>Welcome {user.username}!</h3>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
       </nav>
    )
  }

  const publicOptions = (
    
    <nav className=' register-sign-nav' >
      <a>
      <Link to="/register">Register</Link>
      </a>
      <br />
      <a>
      <Link to="/signin">Sign In</Link>
      </a>
    </nav>
  )


  return (
    
    <header>
    <Link to="/">
      <img src={image} className="nav-logo"/>
    </Link>
    {authenticated && user ? authenticatedOptions : publicOptions}
  </header>
  )
}

export default Nav
