import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import image from '../Sord.png'
import PublicWeapons from '../components/PublicWeapons'
import BuildYourWeapon from '../components/BuildYourWeapon'
import WeaponForm from '../components/WeaponForm'
import { GetPlayer } from '../services/PlayerServices'

const CrudWeapons = ({ player, authenticated, weapons}) => {
    let navigate = useNavigate()
    const [targetWeapon, setTargetWeapon] = useState(
        // weapons.id,
        weapons.name = '',
        weapons.image = ''
        
    )
    const [hidden, setHidden] = useState(true);
    const [change, setChange] = useState(false)
    
   const getPlayer = async () => {
       await GetPlayer(localStorage.getItem(player))
   }
    //onclick function that changes settarget name & image handleClick
  
    return (player && authenticated) ? (
        <div>
            <h1 className='publicweapons-title'>Public Weapons</h1>
            
      
            <div className='weapons-container'>
    
                <div className='weapons-left'>
        
                {weapons.map((weapon) => (
                    <PublicWeapons
                    weapon={weapon}
                    key={weapon.id}
                    image={weapon.image}
                />  
                ))}
                </div> 

           
                <div className='weapons-right'  onClick={() => setHidden(s => !s)} target={targetWeapon}>  
                

                    {weapons.map((weapon) => (
                        <BuildYourWeapon
                        weapon={weapon}
                        key={weapon.id}
                        image={weapon.image}
                        
                        onClick={()=>setTargetWeapon(weapon.id) } //image and name invoked function 
                    />  
                    ))} 
                </div> 
                {!hidden ?
                <div> 
                      <WeaponForm 
                       weapon={weapons}
                       key={weapons.id}
                       image={weapons.image}

                      /> 
             
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
