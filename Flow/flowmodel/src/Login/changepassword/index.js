import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Changepassword = () => {
    const navigate = useNavigate();
    const navigateToHome=()=>{
        navigate('/loginpage')
    }
  return (
    <div className='changepassword'>
        <h2>Changepassword</h2>
        <input
        className='input-1'
        type="text"
        placeholder='New Password'/>
        <br/>
        <input
        className='input-1'
        type="text"
        placeholder='Change new password'/>
        <br/>
        <button onClick={navigateToHome}className='button-1'>Change password</button>
    </div>
  )
}

export default Changepassword