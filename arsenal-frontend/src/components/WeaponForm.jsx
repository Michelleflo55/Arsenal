import { useEffect, useState } from 'react'
import { CreateWeapon } from '../services/WeaponsServices'

const WeaponForm = ( props, player) => {
    
    const [addWeaponDamage, setWeaponDamage] = useState({
        speed:1,
        power:1,
    })
    
    const postSpeed = (e) =>{ 
        setWeaponDamage({ ...addWeaponDamage, speed: e.target.value })
      }
    const postPower = (e) =>{ 
        setWeaponDamage({ ...addWeaponDamage, power: e.target.value })
      } 
    
    const createWeapon = async (weapons) => {
            await CreateWeapon({
                speed:addWeaponDamage.speed,
                power:addWeaponDamage.power,
            })
    
           
    }
    // const [renderArsenal, setRenderArsenal] = useState([])
    // const [change, setChange] = useState(false)
    // useEffect(()=>{
    //      createWeapon()
    // }, )
    

    return(
        <div>
           
        <form  >
            
            <input  
                placeholder="Choose weapon speed" 
                onChange={postSpeed } 
                type="number"
            />
            <input 
                placeholder="Choose weapon power" 
                onChange={postPower}
                type="number" pattern="[0-9]*"
            />
            
        </form> 
        
        <button onClick={()=>createWeapon()}>Make weapon public</button>  
        
        </div>
    )
}
export default WeaponForm