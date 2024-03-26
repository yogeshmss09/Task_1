import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './styles.css'

const Forgetpassword = () => {
    const navigate = useNavigate();
    const navigateToBack=()=>{
        navigate("/forget");
    }
    const navigateToReset=()=>{
        navigate('/resetlink')
    }

  return (
    <div className='forgetpassword'>
        <h2>Forget Password</h2>
        <p>please enter valid email address we send a link</p>
        <input
        className='input-1'
        type='text'
        placeholder='Email'
        /><br/>
        <button onClick={navigateToReset}className='button-1'>Send me a reset link</button><br/>
        <br/>
        <button onClick={navigateToBack}className='button-1'>back</button>
    </div>
  )
}

export default Forgetpassword