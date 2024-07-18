// src/components/LandingPage.js

import React from 'react';
import './LandingPage.css';
import SmokeAnimation from '../account/SmokeAnimation';

function LandingPage() {
  return (
    <div className="landing-container">
      <SmokeAnimation />
      <h1 className="landing-title">
        <span className="glow-letter" >U</span>
        <span className="glow-letter" >r</span>
        <span className="glow-letter" >b</span>
        <span className="glow-letter" >a</span>
        <span className="glow-letter" >n</span>
        <span className="glow-letter" >H</span>
        <span className="glow-letter" >a</span>
        <span className="glow-letter" >v</span>
        <span className="glow-letter" >e</span>
        <span className="glow-letter" >n</span>
      </h1>
      <div className="sub-title">
        <p className="shining-text">The Leading E-Commerce Website Ever To Exist On Planet Earth</p>
      </div>
    </div>
  );
}

export default LandingPage;
