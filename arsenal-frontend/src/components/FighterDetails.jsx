

const FighterDetails = ( props ) => {
    return(
    
        <div className=''>
            <h3>Fighter: {props.fighter.name}</h3>
            <h3>Health: {props.fighter.health}</h3>    
            <img className='fighter-flex-image'
                src={props.fighter.image}
                style={{maxWidth: "300px"}} 
                />
        </div> 
   
    )
}

export default FighterDetails