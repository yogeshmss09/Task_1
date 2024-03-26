import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

 
  const navigate = useNavigate();

  const validEmail = 'example@example.com';
  const validPassword = 'password';

  const handleLogin = () => {
    if (email === validEmail && password === validPassword) {
      setLoginError(false);
      setIsLoggedIn(true); 
    } else {
      setLoginError(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const navigateToForget = () => {
    navigate('/forget'); 
  };
  const navigatetoSignup = () => {
    navigate('/signuppage');
  };

  return (
    <div className='Login-page'>
      
      <div className='login-container'>
        <h2 className='login-header'>Login</h2>
        <input
          className={`inputbox-1 ${loginError && email.length > 0 ? 'error' : ''}`}
          type="text"
          placeholder="Enter your email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <div className="password-input-container">
          <input
            className={`inputbox-2 ${loginError && password.length > 0 ? 'error' : ''}`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle`} onClick={togglePasswordVisibility}></i>
        </div>
        <p className='forgot-password'onClick={navigateToForget}>Forgot login or password?</p>
        <button className='login-button' onClick={handleLogin}>Login</button>
        {loginError && <p className='error-message'>Incorrect email or password</p>}
        <p className="signup-link">Did not have an account? <span onClick={navigatetoSignup}>Signup</span></p>
      </div>
      {isLoggedIn && <p>You are logged in!</p>} {/* Render additional content upon successful login */}
    </div>
  );
};

export default Login;
