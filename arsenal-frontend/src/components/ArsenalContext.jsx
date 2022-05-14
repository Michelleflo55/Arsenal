import { useState, createContext } from 'react'

const ArsenalContext = createContext()

const ArsenalProvider = (props) => {
    const [arsenal, setArsenal] = useState([])
    
    return(
        <ArsenalContext.Provider value={{arsenal, setArsenal}} >
            {props.children}
        </ArsenalContext.Provider>
    )
}
export { ArsenalContext, ArsenalProvider}