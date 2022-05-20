
import { useState, useContext, useEffect} from 'react'
import {ArsenalContext} from './ArsenalContext'
import { DeleteWeapon, GetWeapons, UpdateWeapon  } from '../services/WeaponsServices'


const PublicWeapons = (props, player) => {
    
   
    const [add, isAdded] = useState(false)
    const [clicked, isClicked] = useState(false)
    const { arsenal } = useContext(ArsenalContext)
    const { setArsenal } = useContext(ArsenalContext)
    const [speed, setSpeed] = useState({
      speed: ''
    })
    
    const deleteWeapon = async (banana) => { 
      const data = await DeleteWeapon({
        banana , 
      }) 
      console.log(banana)
      GetWeapons()
    }
    const updateWeapon = async (banana) => {
      const data = await UpdateWeapon({
        banana
      })
      console.log(speed)
    }
    const updateSpeed = (e) =>{ 
      setSpeed({ ...speed, speed: e.target.value })
    }

    return  (
      <div className='weapons-flex'>
             <h3>{props.weapon.name}</h3>
             <img 
                src={props.weapon.image}
                style={{maxWidth: "250px"}} 
                className='fighter-image'
              />
        {
            clicked ? (
            <div>  
                <h3>Speed:{props.weapon.speed}</h3>
                <h3>Power:{props.weapon.power}</h3>
                <h3>Damage:{props.weapon.damageLevel}</h3>
            </div>
            ) :( <div> </div> ) }
            <br />
            { add ? ( 
                <div>
               
               
                </div>
            ) : (
                <div> 
                    <button className='buttons' onClick={() => isClicked(true)} > Preview Weapon Details </button>
                    <br />
                    <button className='buttons' onClick={() => deleteWeapon((props.weapon.id))}> Delete weapon</button>
                    < br />
                    
                    <button className='buttons' onClick={() => updateWeapon(props.weapon.id)}> Update speed </button>
                    <input  value={speed.speed} placeholder='enter new speed' onChange={updateSpeed} />
                    <br />
                    <button className='buttons'
                    onClick={() => {
                  setArsenal([...arsenal, props])
                  isAdded(true)
                  }}> 
                    Send to Arsenal Cart</button>
                </div>
            )}
            
        
        </div>
    )
    } 

    export default PublicWeapons



    