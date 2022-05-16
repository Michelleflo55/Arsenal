import {useEffect, useState }  from 'react'
import { useNavigate } from 'react-router'
import { GetArsenal } from '../services/ArsenalServices'
import Arsenal from '../components/Arsenal'
import image from '../Sord.png'


const AllArsenals = ( {player, authenticated } ) => {
    let navigate = useNavigate 
    const [arsenals, setArsenals] = useState([])
    
    useEffect(() => {
        const viewArsenals = async (req, res) => {
            const data = await GetArsenal()
            setArsenals(data)
        }
        viewArsenals()
    }, [])

    return ( player && authenticated ) ? (
        <div>
            <h1> All Arsenals </h1>
            <div className="">
                {
                arsenals.map((arsenal) => (
                  <Arsenal 
                  arsenal={arsenal}
                  key={arsenal.id}
                  unsername={arsenal.username}
                  />  
                ))
                }
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

export default AllArsenals