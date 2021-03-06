import './styles/App.css';
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Route, Routes } from 'react-router'
import { WeaponsProvider } from './components/WeaponsContext'
import { ArsenalProvider } from './components/ArsenalContext'
// import { GetFighters } from './services/FighterServices'
//services
import { GetWeapons } from './services/WeaponsServices'

import Nav from './components/Nav'
//importingPages
import Signin from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home'
import SelectFighters from './pages/SelectFighters'
import CrudWeapons from './pages/CrudWeapons';
import ArsenalCheckout from './pages/ArsenalCheckout';








function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [player, setPlayer] = useState(null)
  // const [fighter, setFighter] = useState([])
  const [weapons, setWeapons] = useState([])

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

  useEffect(()=> {
    const handleWeapons = async () => {
      const data = await GetWeapons()
      setWeapons(data)
    }
    handleWeapons()
  }, [])

  return (
    <div>
      <ArsenalProvider>
      <WeaponsProvider>
        <Nav
        authenticated={authenticated}
        player={player}
        handleLogOut={handleLogOut}
       />
     
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
            <SelectFighters
             player={player}
             authenticated={authenticated}
            //  fighter={fighter}
             />} 
          />
          <Route path='/weapons' element={
            <CrudWeapons
              player={player}
              authenticated={authenticated}
              weapons={weapons}
            />}
          />
          <Route path='/createArsenal' element={
            <ArsenalCheckout
              player={player}
              authenticated={authenticated}
            />
          }
          />
        </Routes>
      </main>
      </WeaponsProvider>
      </ArsenalProvider>  
    </div>
  );
}

export default App;
