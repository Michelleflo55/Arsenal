import image from '../Sord.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FighterDetails from '../components/FighterDetails'
import { GetFighters } from '../services/FighterServices'

const SelectFighter = ({ player, authenticated }) => {
    
    let navigate = useNavigate()
    const [fighters, setFighters] = useState([])

    useEffect(() => {
      const handleFighter = async () => {
        const data = await GetFighters()
        setFighters(data)
      }
      handleFighter()
    }, [])

    return ( player && authenticated ) ? (
        <div className=''>
        <h3>Fighters</h3>
        <div className="fighter-container">
          {fighters.map((fighter) => (
          <FighterDetails
          fighter={fighter}
          key={fighter.id}
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
export default SelectFighter