import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import facebookIcon from './facebook.png';
import twitterIcon from './twitter.png';
import instagramIcon from './instagram.png';
import linkedinIcon from './linkedin.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-title">UrbanHaven</h3>
        <Link to="/premium" className="footer-link">Premium</Link>
        <p>Get 10% off your first order</p>
        <input type="email" placeholder="Enter your email" className="footer-input"/>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Support</h3>
        <p>188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West Bengal 700032</p>
        <a href="mailto:farhanikbal10@gmail.com" className="footer-link">farhanikbal10@gmail.com</a>
        <a href="tel:+918967463602" className="footer-link">+918967463602</a>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Account</h3>
        <Link to="/my-account" className="footer-link">My Account</Link>
        <Link to="/login" className="footer-link">Login / Register</Link>
        <Link to="/cart" className="footer-link">Cart</Link>
        <Link to="/wishlist" className="footer-link">Wishlist</Link>
        <Link to="/shop" className="footer-link">Shop</Link>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Quick Link</h3>
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <Link to="/terms-of-use" className="footer-link">Terms Of Use</Link>
        <Link to="/faq" className="footer-link">FAQ</Link>
      </div>
      <div className="footer-section">
        <h3 className="footer-title">Socials</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/farhan.ikbal.7737" target="_blank" rel="noopener noreferrer">
            <img src= {facebookIcon} alt="Facebook" className="social-icon"/>
          </a>
          <a href="https://x.com/FarhanIkbal5" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon"/>
          </a>
          <a href="https://www.instagram.com/farhan_primegg/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/farhanikbal0710/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
