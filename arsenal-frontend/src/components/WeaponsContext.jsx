import { useState, createContext } from 'react'

const WeaponsContext = createContext()

const WeaponsProvider = (props) => {
    const [weapons, setWeapons] = useState([])

    

    return(
        <WeaponsContext.Provider value={{weapons, setWeapons}} >
            {props.children}
        </WeaponsContext.Provider>
    )
}

export { WeaponsContext, WeaponsProvider}