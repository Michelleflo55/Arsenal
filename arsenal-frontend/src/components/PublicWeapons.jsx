import { DeleteWeapon } from '../services/WeaponsServices'
import { useState, useContext} from 'react'
import {ArsenalContext} from './ArsenalContext'

const PublicWeapons = (props, change, setChange, handleWeapons, player) => {
    
    const [targeted, setTargeted] = useState(false)
    
    const [add, isAdded] = useState(false)
    const [clicked, isClicked] = useState(false)
    const { arsenal } = useContext(ArsenalContext)
    const { setArsenal } = useContext(ArsenalContext)



   //delete weapon
   

    // const deleteWeapon = async() => {
    //     await DeleteWeapon({
    //         playerId:localStorage.getItem(player),
    //         weaponName: name
    //     })
    // }




    return  (
        <div className='weapons-flex'>
             <img 
                src={props.weapon.image}
                style={{maxWidth: "250px"}} 
                className='fighter-image'
                />
        {
            clicked ? (
            <div>  
                {/* <button onClick={()=> deleteWeapon()}>Delete Weapon</button>  */}
                <h3>{props.weapon.name}</h3>
                <h3>Speed:{props.weapon.speed}</h3>
                <h3>Power:{props.weapon.power}</h3>
                <h3>Damage:{props.weapon.damageLevel}</h3>
                <h3></h3>
                <img 
                src={props.weapon.image}
                style={{maxWidth: "250px"}} 
                className='fighter-image'
                />
            </div>
            ) :( <div> </div> ) }
            <br />
            { add ? ( 
                <div> 
                    <button onClick={() => isClicked(true)}> Preview Weapon Details </button>
                </div> 
            ) : (
                <div>
                <button onClick={() => {
                  setArsenal([...arsenal, props])
                  isAdded(true)
                  }}> 
                    Send to Arsenal Preview</button>
                {/* <button onClick={()=> deleteWeapon()}>Delete Weapon</button> */}
                </div>
            )}
            
        
        </div>
    )
    }

    export default PublicWeapons