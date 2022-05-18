import { DeleteWeapFromArs } from '../services/ArsenalServices'
import { useEffect, useState } from 'react'

const PlayerProfile = ({ renderArsenal, change, setChange, props, weapons, player }) => {
    const [name, setName] = useState('')
    const [targeted, setTargeted] = useState(false)

    const removeWeapon = async () => {
        const data = await DeleteWeapFromArs({
            playerId: localStorage.getItem('myArsenal'),
            choose_weaponId: name.id
        })
        setTargeted(false)
        setChange(true)
    }

    const targetWeapon = () => {
        if (name.propsId  !== ''){
           
        }
    }

    useEffect(() => {
        if (targeted) {
            targetWeapon()
        }
        console.log('banana')
    })

    return(
        <div>
            <h1>My Arsenal</h1>
            <div>{ renderArsenal.map((newArsenal) => (
                <div key={newArsenal.id}>
                    <li>{newArsenal.player.username}</li> 
                    <image src={newArsenal.image} />
                    <br />
                    <button 
                    onClick={() => {setName(newArsenal.id)
                    setTargeted(true)    
                    }}> Remove Weapon </button>
                </div>
            ))}

          </div>
        </div>                
    )
}
export default PlayerProfile