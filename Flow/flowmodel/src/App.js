import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Login/Signup'; // Assuming you have a Signup component
import Forgetpassword from './Login/forgot password';
import Forgetpasswordremind from './Login/forgot-password-remind';
import Changepassword from './Login/changepassword';
import Signuppage from './Login/Signuppage';
import Avatar from './Login/Avatar';
import './App.css'
// Define your App component
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Login />} /> {/* Default route for Login */}
        <Route path="/forget" element={<Signup/>} /> {/* Route for Signup */}
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetlink" element={<Forgetpasswordremind />} />
        <Route path="/changepassword" element={<Changepassword/>} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/signuppage" element={<Signuppage/>} />
        <Route path='/avatar' element={<Avatar/>}/>
      </Routes>
    </Router>
  );
};

export default App;