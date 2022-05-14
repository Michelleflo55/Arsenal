import { useState, createContext } from 'react'

const WeaponsContext = createContext()

const WeaponsProvider = (props) => {
    const [weapon, setWeapon] = useState([])

    return(
        <WeaponsContext.Provider value={{weapon, setWeapon}} >
            {props.children}
        </WeaponsContext.Provider>
    )
}

export { WeaponsContext, WeaponsProvider}