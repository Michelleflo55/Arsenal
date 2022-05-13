import image from '../Arsenal-4.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()
    return (
      <div >
        {/* <header>
            <img  src={image} height={1000} width={1000} className="home-logo" />
        </header> */}
        <section>
        
        <button className="button button-1"  onClick={() => navigate('/signin')}>
          Get Started
        </button>
      
        
          
        </section>
        
      </div>
    )
  }
  
  export default Home