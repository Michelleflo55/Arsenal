import { Link } from 'react-router-dom'
import image from '../Arsenal-4.png'


const Nav = ({ authenticated, player, handleLogOut }) => {
  let authenticatedOptions
  if (player) {
    authenticatedOptions = (
      
        <div className='nav-bar-divider nav-container' >
        <nav className=' register-sign-nav'>
        <h3> Player: {player.username} </h3>
       <div className='flex-container'>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
        
     
      
        <a className='nav-fight-link'>
        <Link to="/selectFighter"> View Fighters</Link>
        </a>
       
        <br />
     
        <a className='nav-weapons-link'>
        <Link to="/weapons">Weapons</Link>
        </a>
      
        <br />
     
        <a>
        <Link to='/CreateArsenal'>Build Arsenal</Link>
        </a>

        <br />
    
        <a>
        <Link to='allArsenals'> View Arsenals </Link>
        </a>
        </div>
        </nav>
        </div>
      
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
