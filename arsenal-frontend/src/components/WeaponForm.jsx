import { useState } from 'react'
import { CreateWeapon } from '../services/WeaponsServices'

const WeaponForm = ( props, player) => {
    
    const [addWeaponDamage, setWeaponDamage] = useState({
        speed:1,
        power:1,
        // image: props.image,
        // name: props.name
    })
    
    const postSpeed = (e) =>{ 
        setWeaponDamage({ ...addWeaponDamage, speed: e.target.value })
      }
    const postPower = (e) =>{ 
        setWeaponDamage({ ...addWeaponDamage, power: e.target.value })
      } 
    // const postImage = (e) => {
    //     setWeaponDamage({...addWeaponDamage, image: props.image})
    // }
    
    const createWeapon = async (weapons) => {
            await CreateWeapon({
                // weaponId:({...addWeaponDamage,}),
                speed:addWeaponDamage.speed,
                power:addWeaponDamage.power,
                image:props.image,
                name:props.name
            })
        console.log(props.weapons.image)
            // setWeaponDamage({...addWeaponDamage, speed: 1, power:1, name:props.name, image:props.image })
    }

    

    return(
        <div>
           
        <form  >
            {props.weapon.name}
            <input  
                placeholder="Choose weapon speed" 
                onChange={postSpeed } 
                type="text" pattern="[0-9]*"
            />
            <input 
                placeholder="Choose weapon power" 
                onChange={postPower}
                type="text" pattern="[0-9]*"
            />
            
        </form> 
        
        <button onClick={()=>createWeapon()}>Make weapon public</button>  
        <img src={props.weapon.image}  />
        </div>
    )
}
export default WeaponForm