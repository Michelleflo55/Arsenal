import { useNavigate } from 'react-router-dom'
import image from '../Sord.png'



const CrudWeapons = ({ player, authenticated, weapons}) => {

let navigate = useNavigate()
    return (player && authenticated) ? (
        <div>
           <h3>Get Weapons for Arsenal</h3> 
           <div className=''>
                {weapons.map((weapon) => (
                    <WeaponsDetails
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

export default CrudWeapons
