import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Forgotpasswordremind = () => {
    const navigate = useNavigate();
    const changePassword=()=>{
        navigate('/changepassword')

    }
  return (
    <div className='forgotpasswordremind'>
        <h2>Forget Password</h2>
        <p>please check email for link to reset password</p>
        <p>Did you get mail?</p><br/>
        <span>check spam or<p onClick={changePassword} className='click-underline'>click here to send it again</p> </span>
    </div>
  )
}

export default Forgotpasswordremind