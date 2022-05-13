

const FighterDetails = ( props ) => {
    return(
    <div> 
    
        <h3>Fighter: {props.fighter.name}</h3>
        <h3>Health: {props.fighter.health}</h3>
        <img src={props.image} style={{maxHeight: "500px"}} />
    </div>
    )
}

export default FighterDetails