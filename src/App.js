// src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Register from './components/Register';
// import LandingPage from './components/LandingPage';
// import Loading from './components/Loading';
// import Premium from './components/Premium';
// import MyAccount from './components/MyAccount';
// import Cart from './components/Cart';
// import Wishlist from './components/Wishlist';
// import Shop from './components/Shop';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import TermsOfUse from './components/TermsOfUse';
// import FAQ from './components/FAQ';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<LandingPage />} />
//         <Route path="/premium" element={<Premium />} />
//         <Route path="/my-account" element={<MyAccount />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/cart" element={<Loading />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-of-use" element={<TermsOfUse />} />
//         <Route path="/faq" element={<FAQ />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/utilities/Navbar';
import Footer from './components/utilities/Footer';
import LandingPage from './components/utilities/LandingPage';
import Login from './components/account/Login';
import Register from './components/account/Register';
import HomePage from './components/homepage/Homepage';
// import Profile from './components/account/Profile';
// import Cart from './components/Cart'; // You need to create this component
// import Wishlist from './components/Wishlist'; // You need to create this component
import MyAccount from './components/account/MyAccount'; // You need to create this component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />}/>
         {/* <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} /> */}
        {/* <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/wishlist" element={isLoggedIn ? <Wishlist /> : <Navigate to="/login" />} /> */}
        {/* <Route path="/my-account" element={isLoggedIn ? <MyAccount /> : <Navigate to="/login" />} /> */}
        <Route path="/my-account" element={<MyAccount />}/>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
