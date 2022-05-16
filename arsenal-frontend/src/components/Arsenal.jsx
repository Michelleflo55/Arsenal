
import { useNavigate } from 'react-router'
import { useState } from 'react'

const Arsenal = ({ arsenal , props, player }) => {
    let navigate = useNavigate()
    const [clicked, isClicked] = useState(false)
    return(
        <div >
        {
            clicked ? (
            <div >
                <div >
                <div >
                    <h3 >{arsenal.username}'s Watchlist
                    <button className='x-list'onClick={() => isClicked(false)}>X</button>
                    </h3>
                    <br />
                    <div >
                    {arsenal.map((arsenal) => (
                    <div key={arsenal.id} >
                    <div>
                        <h3 >{arsenal.name}</h3>
                    </div>
                    </div>
            ))}
                       
                </div>
                </div>
                </div>
            <div ></div>
</div>
) : (
                <div className='protected'>
                
            </div> 
)
}
    </div>

    )
}

export default Arsenal 
//  <div>
// {arsenal.arsenal.map((arsenal) => ( 
//     <div key={arsenal.id }> {props.player.username} </div>

// ))}
// </div>

