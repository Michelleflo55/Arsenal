

const BuildYourWeapon= (props, targetWeapon, setTargetWeapon) => {
    
    return(
        <div className='build-weapons-flex '  >
        
            <h3 >{props.weapon.name} </h3>
            <img 
            src={props.weapon.image}
            style={{maxWidth: "250px"}} 
            className='fighter-image'
            />
        </div>
  
    )
    }

    export default BuildYourWeapon
