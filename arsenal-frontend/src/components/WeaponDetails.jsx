const WeaponsDetails = (props) => {
    return(
        <div>
            <h3>{props.weapon.name}</h3>
            <h3>Speed:{props.weapon.speed}</h3>
            <h3>Power:{props.weapon.power}</h3>
            <h3>Damage:{props.weapon.damageLevel}</h3>
            <h3></h3>
            <img 
            src={props.weapon.image}
            />
        </div>
    )
    }

    export default WeaponsDetails