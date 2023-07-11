import React, { useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Header() {
  const user_id = localStorage.getItem('user_id');
  console.log(user_id, 'data header');
  
  const Logout = (e) => {
    localStorage.removeItem('user_id');
    sessionStorage.removeItem('user_id');
    window.location.href = process.env.REACT_APP_BASE_URL+"login";
  };

  return <nav className="navbar navbar-expand-lg">
    <div className="container-fluid navbar">    
      <Link to="/" className="navbar-brand logo pl-4" >
        <img src="assets/images/kh-logo.png" alt="Logo" /></Link>
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
          {(() => {
              if (user_id == null){
                  return (
                    <li className="nav-item">
                    <Link to="/login" className="nav-link text-light">Log In</Link>
                  </li>      
                  )
              }else{
                return (
                  [
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 pr-5">
                  <li className="nav-item"><Link to="/profile-update" className="nav-link text-light">Profile</Link></li> 
                  <li className="nav-item"><Link to='login' className="nav-link text-light" onClick={Logout}>Logout</Link></li>
                  </ul>
                  ]
                )
                
              }              
            })()}
              
          </ul>
      </div>
    </div>
  </nav>;
  }
  export default Header;