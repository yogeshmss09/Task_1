import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Signuppage = () => {
  const navigate = useNavigate();
  const handleOnClickSignup=()=>{
    navigate('/avatar')

  }
  return (
    <div className='signuppage'>
        <h2>Signup</h2>
        <input
        className='input-1'
        type='text'
        placeholder='Email'/><br/>
        <input
        className='input-1'
        type='text'
        placeholder='Password'/><br/>
        <input
        className='input-1'
        type='text'
        placeholder='Confirm Password'/><br/>
        <button onClick={handleOnClickSignup} className='button-1'>Sign up</button><br/>
        <span >Have account?LogIn</span>
    </div>
  )
}

export default Signuppage