import image from '../Sord.png'
import { useNavigate } from 'react-router-dom'

const SelectFighter = ({ player, authenticated, fighter }) => {
    
    let navigate = useNavigate()

    return ( player && authenticated ) ? (
        <div className="browse-container">
        <h3>Fighters</h3>
        <div className="anime-grid">
            {fighter.map((show) => (
            <FighterDetails
            show={show}
            key={show.id}
            name={show.name}
            image={show.image}
            health={show.health}
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