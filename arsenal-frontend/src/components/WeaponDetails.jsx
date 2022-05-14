const WeaponsDetails = (props) => {
    return(
        <div>
            <h3>{props.weapons.name}</h3>
            <h3>{props.weapons.speed}</h3>
            <h3>{props.weapons.power}</h3>
            <h3></h3>
            <img 
            src={props.weapons.image}
            />
        </div>
    )
    }

    export default WeaponsDetails