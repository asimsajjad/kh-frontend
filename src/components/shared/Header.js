import React from 'react';
import UserProfile from './UserProfile';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Header() {

  const UserIDString = sessionStorage.getItem('data');
  const data = JSON.parse(UserIDString);
  console.log(data, 'data header');

console.log('Session -- header', UserProfile.getName());

  return <nav className="navbar navbar-expand-lg">
    <div className="container-fluid navbar">    
      <Link to="/" className="navbar-brand logo pl-4" href="index.html">
        <img src="assets/images/logo.png" alt="" width="253px"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img className="toogler-img" src="assets/images/download.svg" alt="" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pr-5">
          <li className="nav-item">
            <Link to="/" className="nav-link active text-light" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link text-light" >Find Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/labours" className="nav-link text-light">Find Labours</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link text-light">Contact Us</Link>
          </li> 
          {/* {(() => {
            if(data.user_id == null){
              return ( */}
              <li className="nav-item">
              <Link to="/login" className="nav-link text-light">Log In</Link>
            </li> 
             {/* )
             } else {
              return  (  */}
              <li className="nav-item">
                <Link to="/profile-update" className="nav-link text-light">Profile</Link>
            </li>  
             {/* )
            }
          })()} */}
          </ul>
      </div>
    </div>
  </nav>;
  }
  export default Header;