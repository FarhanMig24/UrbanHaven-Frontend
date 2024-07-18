import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUserCircle, FaCrown } from 'react-icons/fa';

function Navbar({ isLoggedIn, setIsLoggedIn, username, isPremium }) {
  const [isAccountDropdownVisible, setIsAccountDropdownVisible] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally, navigate to the login page or home page after logging out
    // navigate('/login');
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownVisible(!isAccountDropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className='websitename'>UrbanHaven</Link>
        <ul className="nav-links">
          <li><Link to="home">Home</Link></li>
          <li className="dropdown">
            <Link to="categories">Categories</Link>
            <ul className="dropdown-menu">
              <li><Link to="category1">Men</Link></li>
              <li><Link to="category2">Woman</Link></li>
              <li><Link to="category3">Children</Link></li>
            </ul>
          </li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="What are you looking for?" aria-label="Search" />
        {isLoggedIn && (
          <ul className="nav-links">
            <li><Link to="/wishlist"><FaHeart /></Link></li>
            <li><Link to="/cart"><FaShoppingCart /></Link></li>
            <li className="account-dropdown">
              <FaUserCircle onClick={toggleAccountDropdown} />
              {isAccountDropdownVisible && (
                <ul className="dropdown-menu">
                  <li>Welcome, {username}</li>
                  <li><Link to="/my-account">Edit Account</Link></li>
                  <li>
                    {isPremium ? (
                      <span><FaCrown /> Premium</span>
                    ) : (
                      <Link to="/premium">Buy Premium</Link>
                    )}
                  </li>
                  <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
