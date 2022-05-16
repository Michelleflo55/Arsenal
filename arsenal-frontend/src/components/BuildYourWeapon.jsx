import { DeleteWeapon } from '../services/WeaponsServices'
import { useState } from 'react'

const BuildYourWeapon= (props, targetWeapon, setTargetWeapon) => {
    //  [clicked, isClicked] = useState(false)
    

    const handleChange = (e) => {
        setTargetWeapon({...targetWeapon, [e.target.name]: e.target.id})
        console.log(handleChange)
    } 



    return(
        <div className='weapons-flex'  >
        
            <h3>{props.weapon.name} </h3>
            <img 
            src={props.weapon.image}
            style={{maxWidth: "250px"}} 
            className='fighter-image'
            onClick={() => handleChange()}
            />
            
        </div>
  
    )
    }

    export default BuildYourWeapon
