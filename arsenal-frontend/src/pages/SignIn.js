import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Signin = (props) => {

  let navigate = useNavigate()

  
  const [formValues, setFormValues] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({
      username: '',
      password: ''
    })
    props.setPlayer(payload)
    props.toggleAuthenticated(true)
    localStorage.setItem('player', payload.username)
    localStorage.setItem('player', payload.id)
 
  }


  return (
    <div className="signin">
			<h3>SignIn</h3>
      <div className="signin-form">
        <form className="form" onSubmit={handleSubmit}>
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
          <button className="button-2 button-2B" disabled={!formValues.username || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signin
