import { useState } from 'react'

const ArsenalWeaponDetails = ( {show} ) => {
    const [ clicked, isClicked ] = useState(false)

    return(
        <div> 
            {
                clicked ? (
                <div> 
                    <image
                    />
                    <h3>{show.name}
                    <button></button>
                    </h3>

                )
            }
        </div>
    )
}