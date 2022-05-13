import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    let navigate = useNavigate()
    
    const [formValues, setFormValues] = useState({
      username: '',
      password: '',
    
    })
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      await RegisterUser({
        username: formValues.username,
        password: formValues.password
      })
      setFormValues({
        username: '',
        password: '',
    
      })
      navigate('/signin')
      console.log(formValues)
    }
  
    return (
      <div className="">
              <h3 className='register-sign-title'>Register to fight!!</h3>
        <div className="register-sign-form">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label>Username</label>
              <input
                onChange={handleChange}
                name="username"
                type="username"
                placeholder="Fighter55"
                value={formValues.username}
                required
              />
            </div>
            <br />
            <div className="input-wrapper">
              <label>Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder='********'
                value={formValues.password}
                required
              />
            </div>
            
            <button className="register-sign-button"
              disabled={
                !formValues.username ||
                (!formValues.password  === formValues.password)
              }>
              Register
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Register
  