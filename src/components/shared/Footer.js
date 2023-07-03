import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
    return    <footer className="text-white py-2 mt-5">
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-3">
          <a className="navbar-brand  " href="index.php"><img src="assets/images/logo.png" className="footer" alt=""/></a>
          <p className="foot">Career Growth: We believe in nurturing talent and providing opportunities for professional growth and development
          </p>
        </div>
        <div className="col-lg-3">
          <h4 className="text-white mb-4 ml-5">For Clients</h4>
          <ul className="list-unstyled ml-5">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/categories">Find Work</Link></li>
          <li><Link to="/services">Find Labours</Link></li>
          <li><Link to="/contact-us" >Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4 className="text-white mb-4">For Labours</h4>
          <ul className="list-unstyled ml-5">
          <li><Link to="/signup" className="foot" >Create Account</Link></li>
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/categories">Find Work</Link></li>
          <li><Link to="/contact-us" >Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4 className="text-white mb-4">Call Us</h4>
          <p className="foot"><i className="mr-2 fa fa-map-marker"></i>Kenya</p>
          <p className="foot"><i className="mr-2 fa fa-phone"></i>+25470000000</p>
          <p className="foot"><i className="mr-2 fa fa-envelope"></i>
            bluelance@gmail.com
          </p>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to="/terms" style={{ color: 'white'}} hover={{color: 'black'}}>Terms of use</Link> | <Link to="/terms" className="foot" style={{color: 'white'}}>Privacy Policy</Link>
        <p className="footer">&copy; Copyright 2022-{currentYear}, Khadim Hazir. All rights reserved.</p>
      </div>
    </div>
  </footer>;
  }
  export default Footer;