import { DeleteWeapon } from '../services/WeaponsServices'
import {useEffect, useState} from 'react'

const PublicWeapons = (props, change, setChange, handleWeapons) => {
    const [targeted, setTargeted] = useState(false)
    const [name, setName] = useState('')
   //delete weapon
    const deleteWeapon = async () => {
         await DeleteWeapon({
            playerId: localStorage.getItem('playerId'),
            weaponId: localStorage.getItem( props.id)

          
        })
        console.log(playerId)
        // setTargeted(false)
        // setChange(true)
    }
    const targetWeapon = () => {
        if (name.propsId!== ''){
            deleteWeapon()
        }
    }

    useEffect(() => {
        if (targeted){
            targetWeapon()
        }
    })

    return(
        <div className='weapons-flex'>
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
            <br />
            <button 
            onClick={() => 
            deleteWeapon()
            }
            >Delete Weapon</button>

        </div>
    )
    }

    export default PublicWeapons