import { Link } from 'react-router-dom'
import image from '../Arsenal-4.png'


const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className='nav-bar'>
        <h3>Welcome {user.username}!</h3>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
       </nav>
    )
  }

  const publicOptions = (
    <nav className='nav-bar'>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
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
