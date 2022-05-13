import './styles/App.css';
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Route, Routes } from 'react-router'
// import { GetFighters } from './services/FighterServices'
import Home from './pages/Home'
import Signin from './pages/SignIn'
import Register from './pages/Register'
import Nav from './components/Nav'
import SelectFighter from './pages/SelectFighter'




function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [player, setPlayer] = useState(null)
  // const [fighter, setFighter] = useState([])

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

  // useEffect(() => {
  //   const handleFighter = async () => {
  //     const data = await GetFighters()
  //     setFighter(data)
  //   }
  //   handleFighter()
  // }, [])

  return (
    <div>
      <div >
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
          <Route path="/selectFighter" element={
            <SelectFighter
             player={player}
             authenticated={authenticated}
            //  fighter={fighter}
             />} 
          />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
