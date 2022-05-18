import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../Sord.png'
import {ArsenalContext} from '../components/ArsenalContext'
// import PublicWeapons from '../components/PublicWeapons'
import PlayerProfile from '../components/PlayerProfile'
import { GetPlayer } from '../services/PlayerServices'
import { PushArsenal } from '../services/ArsenalServices'
import PublicWeapons from '../components/PublicWeapons'
import Arsenal from '../components/Arsenal'

const SendToArsenal = ( {player, authenticated}, weapons ) => {
    const {arsenal, setArsenal} = useContext(ArsenalContext)
    
    const [arsenalDetails, setArsenalDetails] = useState([])
    const [renderArsenal, setRenderArsenal] = useState([])
    const [change, setChange] = useState(false)


    let navigate = useNavigate()
    let load = []

    const updateArsenal = async () => {
        load = await (arsenal.map((weapon)=> {
            return(weapon.id)
        }))
        getArsenal()
    }

    const getArsenal = () => {
        let arr=[]
        load.map((newWeapon) => {
            arr.push({playerId: player.id, weaponId: newWeapon.weaponId, weaponImage:newWeapon.image})
        })
        setArsenalDetails(arr)
        pushArsenal()
    }

    const pushArsenal = () => {
        PushArsenal(arsenalDetails)
        setChange(true)
    }

    const playerArsenal = async () => {
        const data = await GetPlayer(localStorage.getItem('playerId'))
        setRenderArsenal(data.arsenal)
        setChange(false)
    }

    useEffect(() => {
        playerArsenal()
    }, [])

    useEffect(() => {
        playerArsenal()
    }, [change])

    useEffect(() => {
        updateArsenal()
    }, [])

    return (player && authenticated) ? (
        <div>
            <h1>Add weapon to my Arsenal</h1>
            <div>
                <PlayerProfile
                renderArsenal={renderArsenal}
                key={renderArsenal.id}
                name={renderArsenal.name}
                image={renderArsenal.image}
                change={change}
                setChange={setChange}
                />
            </div>
            <div>
                <button onClick={() => setArsenal([])} > Change Weapon </button>
                </div>
                <div>
                <button onClick={() => {
                    updateArsenal()
                    setArsenal([])}}> Update Arsenal</button>
            </div>
            <div>
                {arsenal.map((weapon) => (
                    <PublicWeapons
                    weapon={weapon}
                    key={weapon.id}
                    />
                ))}    
            </div>    
        </div>
    ) : (
        <div className='protected'>
           <img 
              className="sord-image"
              src={ image } 
              onClick={()=> navigate('/signin')} 
            />
        </div>
      )


}
export default SendToArsenal