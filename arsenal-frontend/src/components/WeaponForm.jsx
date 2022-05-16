import { useState } from 'react'
import { CreateWeapon } from '../services/WeaponsServices'

const WeaponForm = ( props, {player}) => {
    
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
     
    const createWeapon = async (weapons) => {
            await CreateWeapon({
                weaponId:({...addWeaponDamage,}),
                speed:addWeaponDamage.speed,
                power:addWeaponDamage.power
            })
            setWeaponDamage({...addWeaponDamage, speed: 1, power:1 })
    }

    return(
        <div>
            <img src={props.weapon.image} />
        <form>
            <input  
                placeholder="Choose weapon speed" 
                onChange={postSpeed} 
                type="text" pattern="[0-9]*"
            />
            <input 
                placeholder="Choose weapon power" 
                onChange={postPower}
                type="text" pattern="[0-9]*"
            />
        </form> 
        
        <button onClick={()=>createWeapon()}>Make weapon public</button>  

        </div>
    )
}
export default WeaponForm