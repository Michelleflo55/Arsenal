import { useState } from 'react'

const WeaponForm = ( props ) => {
    
    const [addWeaponDamage, setWeaponDamage] = useState({
        speed:1,
        power:1
    })
    const postSpeed = (e) =>{ 
        setWeaponDamage({ ...addWeaponDamage, speed: e.target.value })
      }
    const postPower = (e) =>{ 
        setWeaponDamage({ ...addWeaponDamage, power: e.target.value })
      } 
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