import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
// import { WeaponsContext } from '../components/WeaponsContext'
import image from '../Sord.png'
import PublicWeapons from '../components/PublicWeapons'
import BuildYourWeapon from '../components/BuildYourWeapon'
import WeaponForm from '../components/WeaponForm'


const CrudWeapons = ({ player, authenticated, weapons}) => {
    let navigate = useNavigate()
   
    const [hidden, setHidden] = useState(true);
  
    return (player && authenticated) ? (
        <div>
            <h1 className='publicweapons-title'>Public Weapons</h1>
            <h1  className='buildweapons-title'>Build your weapon
            <ul className='buildweapons-list'>
                <li>select a weapon</li>
                <li>add speed</li>
                <li>add power</li>
                <li>Add to public weapons</li>
            </ul>
            </h1>
      
            <div className='weapons-container'>
    
                <div className='weapons-left'>
        
                {weapons.map((weapon) => (
                    <PublicWeapons
                    weapon={weapon}
                    key={weapon.id}
                />  
                ))}
                </div> 
       
       
                <div className='weapons-right'  onClick={() => setHidden(s => !s)}>  
                    {weapons.map((weapon) => (
                        <BuildYourWeapon
                        weapon={weapon}
                        key={weapon.id}
                    />  
                    ))}
                </div> 
                {!hidden ?
                <div>  
                      <WeaponForm /> 
                </div>
                : null } 
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
