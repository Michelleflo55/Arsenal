import { DeleteWeapFromArs } from '../services/ArsenalServices'
import { useEffect, useState } from 'react'

const PlayerProfile = ({ renderArsenal, change, setChange }) => {
    const [name, setName] = useState('')
    const [targeted, setTargeted] = useState(false)

    const removeWeapon = async () => {
        const data = await DeleteWeapFromArs({
            playerId: localStorage.getItem('playerId'),
            choose_weaponId: name
        })
        setTargeted(false)
        setChange(true)
    }

    const targetWeapon = () => {
        if (name.choose_weaponId !== ''){
            removeWeapon()
        }
    }

    useEffect(() => {
        if (targeted) {
            targetWeapon()
        }
    })

    return(
        <div>
            <h1>My Arsenal</h1>
            <div>{ renderArsenal.map((newArsenal) => (
                <div key={newArsenal.id}>
                    <li>{newArsenal.name}</li> 
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