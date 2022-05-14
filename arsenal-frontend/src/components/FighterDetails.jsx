

const FighterDetails = ( props ) => {
    return(
    
        <div className='fighter-details-flex'>
            <h3 className=''>Fighter: {props.fighter.name}</h3>
            <h3 className=''>Health: {props.fighter.health}</h3>    
            <img className='fighter-image'
                src={props.fighter.image}
                style={{maxWidth: "300px"}} 
                />
        </div> 
   
    )
}

export default FighterDetails