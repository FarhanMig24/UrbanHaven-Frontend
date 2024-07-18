// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import loginImage from './login.png';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import Loading from '../utilities/Loading';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear any previous error
    setError('');
    setLoading(true); // Set loading to true when initiating the API call

    // Form validation
    if (!email || !password) {
      setError('Both fields are required.');
      setLoading(false); // Reset loading state
      return;
    }

    // Hash the password
    const hashedPassword = CryptoJS.SHA256(password).toString();

    try {
      // API call to validate credentials
      // const response = await axios.post('https://your-api-endpoint/login', {
      //   email,
      //   password: hashedPassword,
      // });
      console.log(email + " " + password);
      if(email === "f@g.com" && password === "123")
      {
        // console.log('Login successful:', response.data);
        setLoading(false); // Reset loading state
        setIsLoggedIn(true);
        navigate('/home');
      }
      // Handle successful login
      

    } catch (error) {
      // Handle errors (e.g., incorrect credentials)
      setError('Login failed. Please check your credentials and try again.');
      console.error('Error during login:', error);
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="login-container">
      {loading ? ( // Show loading screen if loading state is true
          <Loading />
        ) : (
      <>
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-form">
        <h2>Log in to UrbanHaven</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email or Phone Number</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Log In</button>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </form>
      </div>
      <div className="register-link">
        Not a member? <a href="/register" className='register'>Register</a>
      </div>
      </>
        )}
    </div>
  );
}

export default Login;
