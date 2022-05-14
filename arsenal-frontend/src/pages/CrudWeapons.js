import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { WeaponsContext } from '../components/WeaponsContext'
import image from '../Sord.png'
import WeaponDetails from '../components/WeaponDetails'


const CrudWeapons = ({ player, authenticated, weapons}) => {

    // const {weapons} = useContext(WeaponsContext)
   


let navigate = useNavigate()
    return (player && authenticated) ? (
        <div>
           <h3>Get Weapons for Arsenal</h3> 
           <div className='weapons-container'>
                {weapons.map((weapon) => (
                    <WeaponDetails
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
