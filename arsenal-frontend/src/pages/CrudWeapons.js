import { useNavigate } from 'react-router-dom'

const CrudWeapons = ({ player, authenticated, weapons}) => {

let navigate = useNavigate()
    return (user && authenticated) ? (
        <div>
           <h3>Get Weapons for Arsenal</h3> 
           <div className=''>
                {weapons.map((weapon) => (
                    <WeaponsDetails
                    weapon={weapon}
                    key={show.id}
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
