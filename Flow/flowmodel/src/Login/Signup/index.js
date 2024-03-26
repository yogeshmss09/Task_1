// Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'


const Signup = () => {
    const navigate = useNavigate();
    const navigateToforgotpassword = () => {
        navigate('/forgetpassword'); // Navigate to the '/signup' route
      };
  return (
    <div className='signup'>
   
      <p>I don't remember my logins login is a strong of degits of an email address</p>
      <span onClick={navigateToforgotpassword} className='forgot-password'>I don't Remember My Password</span>
      
    </div>
  );
};

export default Signup;
