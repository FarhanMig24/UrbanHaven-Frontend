// src/Register.js
import React, { useState } from 'react';
import './Register.css';
import registerImage from './login.png';
import { useNavigate } from 'react-router-dom';
import Loading from '../utilities/Loading';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const checkEmailOrPhoneExists = async (emailOrPhone) => {
    // Replace with the actual API endpoint
    const apiUrl = `https://example.com/api/check-user?identifier=${emailOrPhone}`;
    try {
      const response = await axios.get(apiUrl);
      return response.data.exists; // Adjust based on your API response structure
    } catch (error) {
      console.error('Error checking email or phone number:', error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear any previous error
    setError('');
    setLoading(true); // Set loading to true when initiating the API call

    // Form validation
    if (!name || !emailOrPhone || !password) {
      setError('All fields are required.');
      setLoading(false); // Reset loading state
      return;
    }

    if (!validateEmail(emailOrPhone) && !validatePhoneNumber(emailOrPhone)) {
      setError('Please enter a valid email or phone number.');
      setLoading(false); // Reset loading state
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false); // Reset loading state
      return;
    }

    try {
      // Check if email or phone number already exists
      const exists = await checkEmailOrPhoneExists(emailOrPhone);
      if (exists) {
        setError('Email or phone number already exists.');
        setLoading(false); // Reset loading state
        return;
      }

      // Fake delay function for registration
      const fakeApiCall = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: 'Fake registration data' });
          }, 3000); // 3 second delay
        });
      };

      // Simulate API call with fake delay
      const response = await fakeApiCall();

      // Handle successful registration
      console.log('Registration successful:', response.data);
      setLoading(false); // Reset loading state
      navigate('/home');

    } catch (error) {
      // Handle errors
      setError('Registration failed. Please try again.');
      console.error('Error during registration:', error);
      setLoading(false); // Reset loading state
    }
  };

  const handleGoogleSignUp = () => {
    // Redirect the user to Google's OAuth authentication page
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile&prompt=select_account';
  };

  if (loading) {
    return <Loading />; // Display loading screen if loading state is true
  }

  return (
    <div className="register-container">
      <div className="register-image">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="register-form">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailOrPhone">Email or Phone Number</label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
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
          <button type="submit">Create Account</button>
        </form>
        <button className="google-signup" onClick={handleGoogleSignUp}>Sign Up with Google</button>
      </div>
      <div className="login-link">
        Already a member? <a href="/login" className='login'>Login</a>
      </div>
    </div>
  );
}

export default Register;