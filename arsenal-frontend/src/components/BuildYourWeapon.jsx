const BuildYourWeapon= (props) => {
    return(
        <div className='weapons-flex'>
        
            <h3>{props.weapon.name}</h3>
            <img 
            src={props.weapon.image}
            style={{maxWidth: "250px"}} 
            className='fighter-image'
            />
        </div>
  
    )
    }

    export default BuildYourWeapon

 

    //make a createweapon form
    //add a turnary operator when image is clicked call form
    //paste into 