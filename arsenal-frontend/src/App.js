import './styles/App.css';
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Signin from './pages/SignIn'
import Register from './pages/Register'
import Nav from './components/Nav'



function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [player, setPlayer] = useState(null)

  const handleLogOut = () => {
    setPlayer(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    //console.log(user)
    setPlayer(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div>
        <Nav
        authenticated={authenticated}
        player={player}
        handleLogOut={handleLogOut}
       />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={
              <Signin
                setPlayer={setPlayer}
                player={player}
                authenticated={authenticated}
                toggleAuthenticated={toggleAuthenticated} 
              />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
