import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Footer() {
    return    <footer class="text-white py-2 mt-2">
    <div class="container mt-5 ">
      <div class="row">
        <div class="col-md-3">
          <a class="navbar-brand  " href="index.php"><img src="assets/images/logo.png" class="footer" alt=""/></a>
          <p class="foot">Career Growth: We believe in nurturing talent and providing opportunities for professional growth and development
          </p>
        </div>
        <div class="col-lg-3">
          <h4 class="text-white mb-4 ml-5">For Clients</h4>
          <ul class="list-unstyled ml-5">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/category">Find Work</Link></li>
          <li><Link to="/service">Find Labours</Link></li>
          <li><Link to="/contact" >Contact Us</Link></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h4 class="text-white mb-4">For Labours</h4>
          <ul class="list-unstyled ml-5">
          <li><Link to="/signup" class="foot" >Create Account</Link></li>
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/category">Find Work</Link></li>
          <li><Link to="/contact" >Contact Us</Link></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h4 class="text-white mb-4">Call Us</h4>
          <p class="foot"><i class="mr-2 fa fa-map-marker"></i>Kenya</p>
          <p class="foot"><i class="mr-2 fa fa-phone"></i>+25470000000</p>
          <p class="foot"><i class="mr-2 fa fa-envelope"></i>
            bluelance@gmail.com
          </p>
        </div>
      </div>
      <div class="text-center mt-3">
        <p class="footer mt-2">&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </div>
  </footer>;
  }
  export default Footer;