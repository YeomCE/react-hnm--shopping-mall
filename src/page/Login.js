import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate()

  const loginUser=(e)=>{
    e.preventDefault();
    setAuthenticate(true);
    navigate("/")

  }

  return (
    <div className='login-box'>
    <h2>Login</h2>
    <form onSubmit={(event)=>loginUser(event)}>
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
        <label>Password</label>
        <input type="password" placeholder="Password" />

        <button type='submit'>Login</button>
      </form>
</div>
  )
}

export default Login