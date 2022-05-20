import { useState } from "react";


const ArsWeaponDetail = ( {show} , props) => {

  const [clicked, isClicked] = useState(false)
  

return (
  <div >
    {
      clicked ? ( 
        <div >
            <div >
              <img 
 				 src={props.weapon.image} 
                 style={{maxWidth: "200px"}} 
             />
              <div >
              <h3>{show.props.name}
                <button  onClick={()=>isClicked(false)}>x</button>
              </h3>
                <p>speed {show.speed}</p>
                <p>power: {show.power}</p>
                <p>damage: {show.damage}</p>
              </div>
            </div>
          <div ></div>
        </div>
      ) : (
        <div></div>
      )
    }
    <div  key={show.id} >
      <div className="title-bar">
        <h3>{ show.player}</h3>
				<button onClick={()=>isClicked(true)}  >Show Info</button>
      </div>
    </div>
  </div>
)
}

export default ArsWeaponDetail
