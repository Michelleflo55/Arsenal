import image from '../Sord.png'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArsenalContext } from '../components/ArsenalContext'
import { GetPlayer } from '../services/PlayerServices'
import { PushArsenal }from '../services/ArsenalServices'
import ArsWeaponDetail from '../components/ArsWeaponDetail'
import PlayerProfile from '../components/PlayerProfile'

const ArsenalCheckout = ({player, authenticated}, weapon) => {
    const { arsenal } = useContext(ArsenalContext)
    const { setArsenal }= useContext(ArsenalContext)
    const [arsenalData, setArsenalData] = useState([])
    const [renderArsenal, setRenderArsenal] = useState([])
    const [change, setChange] = useState(false)

    let navigate = useNavigate()
    let load = []

    const updateArsenal = async () => {
        load = await (arsenal.map((item) => {
            return(item.id)
        }))
        gotArsenal()
    } 
    
    const gotArsenal = () => {
        let exarr = []
        load.map((newItem)=> {
         exarr.push({playerId: player.id, weaponId: newItem})   
        })
        setArsenalData(exarr)
        pushArsenal()
    } 
    const pushArsenal = () => {
        PushArsenal(arsenalData)
        setChange(true)
    }
    const playerArsenal = async () => {
        const data = await GetPlayer(localStorage.getItem('player'))
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
            <div>
                <h3> Loading Arsenal </h3>
                <button onClick={() => setArsenal()}> Clear Preview </button>
                <button 
                onClick={() => {updateArsenal() 
                setArsenal([])}}> Load My Arsenal</button>
            </div>
            <div> 
                {arsenal.map((show) => (
                <ArsWeaponDetail
                    key={show.id}
                    name={show.name}
                    image={show.image}
                /> ))}
            </div>
            <div>
                <PlayerProfile
                    renderArsenal={renderArsenal}
                    key={renderArsenal.id}
                    weapon={renderArsenal.weaponName}
                    change={change}
                    setChange={setChange}
                />
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

export default ArsenalCheckout 