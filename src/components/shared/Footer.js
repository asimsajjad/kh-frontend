import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
    return    <footer className="text-white py-2 mt-5">
    <div className="container footer mt-5 ">
      <div className="row">
        <div className="col-md-3">
          <a className="navbar-brand  " href="index.php"><img src="assets/images/logo.png" className="footer" alt=""/></a>
          <p className="foot">Khadim Hazir is designed to streamline the process of connecting employers with skilled workers, making it easier than ever to find the right talent for your business.
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
          <h4 className="text-white mb-4 ml-5">For Labours</h4>
          <ul className="list-unstyled ml-5">
          <li><Link to="/signup" className="foot" >Create Account</Link></li>
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/categories">Find Work</Link></li>
          <li><Link to="/contact-us" >Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4 className="text-white mb-4">Call Us</h4>
          <p className="foot"><i className="mr-2 fa fa-map-marker"></i>Pakistan: New Defense View Housing Scheme , Dera Ghazi Khan, Punjab 32200.</p>
          <p className="foot"><i className="mr-2 fa fa-phone"></i>+92 3346929604</p>
          <a href='mailto:demo@example.com'><p className="contact"><i className="mr-2 fa fa-envelope"></i>demo@example.com</p></a>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to="/terms" className='policy'>Terms of use</Link> | <Link to="/terms" className="policy" >Privacy Policy</Link>
        <p className="footer">&copy; Copyright 2022-{currentYear}, Khadim Hazir. All rights reserved.</p>
      </div>
    </div>
  </footer>;
  }
  export default Footer;