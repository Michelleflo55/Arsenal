import { DeleteWeapFromArs } from "../services/ArsenalServices"
import { useEffect, useState } from 'react'

const PlayerProfile = ({ renderArsenal, change, setChange }) => {
    const [weapon, setWeapon] = useState('')
    const [targeted, setTargeted] = useState(false)

    const deleteArsenalItem = async () => {
        const data = await DeleteWeapFromArs({
            playerId: localStorage.getItem('playerId'),
            weapon: weapon
        })
        setTargeted(false)
        setChange(true)
    }
    const targetArsenalItem = () => {
        if (weapon.choose_weaponId !== ''){
            deleteArsenalItem()
        }
    }

    useEffect(() => {
        if (targeted) {
            targetArsenalItem()
        }
    })

    return(
        <div>
            <h3> Player:<span >{localStorage.getItem('player')} </span></h3>
            <div>
                <h3>My Arsenal</h3>
                {renderArsenal.map((newArsenal) => (
                  <div key={newArsenal.id}>
                    <li>
                      {newArsenal.weapon}
                    </li>
                    <br />
                    <button onClick={() => {setWeapon(newArsenal.id)
                    setTargeted(true)
                    }}> Delete Weapon from Arsenal </button>  
                  </div>      
                ))}
            </div>

        </div>
    )
}

export default PlayerProfile 