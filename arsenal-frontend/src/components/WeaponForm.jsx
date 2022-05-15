import { useState } from 'react'
import { WeaponsContext } from '../components/WeaponsContext'
const WeaponForm = ( props ) => {
    

    return(
        <div>
        <form>
            <input  placeholder="Choose weapon speed"></input>
            <input placeholder="Choose weapon power"></input>
        </form> 
        
        <button>Make weapon public</button>  

        </div>
    )
}
export default WeaponForm