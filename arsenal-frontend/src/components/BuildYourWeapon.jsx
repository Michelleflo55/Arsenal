// import { DeleteWeapon } from '../services/WeaponsServices'
import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'
import { useLinkClickHandler } from 'react-router-dom'

const BuildYourWeapon= (props, targetWeapon, setTargetWeapon) => {
    //  [clicked, isClicked] = useState(false)
        const [hideNewWeapon, setHideNewWeapon] = useState([])
        const [isClicked, SetIsClicked]= useState(false)

    // const handleChange = (e) => {
    //     setTargetWeapon({...targetWeapon, [e.target.speed]: e.target.power})
    //     console.log(handleChange)
    // } 
    const hideWeapon = () => {
        if(hideNewWeapon > 4 && isClicked(true) ){
        SetIsClicked()       
    }}

    

    return(
        <div className='build-weapons-flex '  >
        
            <h3 onClick={() => setHideNewWeapon(hideWeapon)}>{props.weapon.name} </h3>
            <img 
            src={props.weapon.image}
            style={{maxWidth: "250px"}} 
            className='fighter-image'
            // onClick={() => handleChange()}
            />
            
        </div>
  
    )
    }

    export default BuildYourWeapon
