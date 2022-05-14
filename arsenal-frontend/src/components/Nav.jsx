import { Link } from 'react-router-dom'
import image from '../Arsenal-4.png'


const Nav = ({ authenticated, player, handleLogOut }) => {
  let authenticatedOptions
  if (player) {
    authenticatedOptions = (
      <nav className=' register-sign-nav'>
        <h3> Player: {player.username} </h3>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
        <Link to="/selectFighter"> View Fighters</Link>
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
      {authenticated && player ? authenticatedOptions : publicOptions}
    </header>
    
  )
}

export default Nav
