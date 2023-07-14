import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const user_id = localStorage.getItem('user_id');
  console.log(user_id, 'data header');
  const Logout = (e) => {
    localStorage.removeItem('user_id');
    sessionStorage.removeItem('user_id');
    // window.location.href = "login";
    navigate("/login");
    
  };

    return <footer className="text-white py-2 mt-5">
    <div className="container footer mt-5 ">
      <div className="row">
        <div className="col-md-3">
          {/* <a className="navbar-brand  " href="index.php"><img src="assets/images/logo.png" className="footer" alt=""/></a> */}
          <Link to="/" className="navbar-brand" >
        <img src="assets/images/kh-logo.png" alt="Logo"  className="footer"/></Link>
          <p className="foot">Khadim Hazir is designed to streamline the process of connecting employers with skilled workers, making it easier than ever to find the right talent for your business.
          </p>
        </div>
        <div className="col-lg-3">
          <h4 className="text-white mb-4 ml-5">For Clients</h4>
          <ul className="list-unstyled ml-5">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/categories">Find Work</Link></li>
          <li><Link to="/labours">Find Labours</Link></li>
          <li><Link to="/contact-us" >Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h4 className="text-white mb-4 ml-5">For Labours</h4>
          <ul className="list-unstyled ml-5">
          {(() => {
              if (user_id == null){
                  return (
                    // <li className="nav-item">
                    <li><Link to="/signup" className="foot" >Create Account</Link></li>
                  // </li>      
                  )
              }else{
                return (
                  <li><Link to="/profile-update">Profile Update</Link></li>
                )
              }              
            })()}
          <li><Link to="/categories">Find Work</Link></li>
          <li><Link to="/contact-us" >Contact Us</Link></li>
          {(() => {
              if (user_id == null){
                  return (
                    // <li className="nav-item">
                   <li><Link to="/labours">Find Labours</Link></li>
                  // </li>      
                  )
              }else{
                return (
                  <li><Link to='login' onClick={Logout}>Logout</Link></li>
                )
              }              
            })()}
          </ul>
        </div>
        <div className="col-lg-3">
          <h4 className="text-white mb-4">Call Us</h4>
          <p className="foot"><i className="mr-2 fa fa-map-marker"></i>Pakistan: New Defense View Housing Scheme , Dera Ghazi Khan, Punjab 32200.</p>
          <a href='https://wa.me/+923346929604'><p className='contact'><i className="mr-2 fa fa-phone"></i>+923346929604</p></a>
          <a href='mailto:info@ratedsolution.com'><p className="contact"><i className="mr-2 fa fa-envelope"></i>info@ratedsolution.com</p></a>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to="/terms" className='policy'>Terms and conditions</Link>
        <p className="footer">&copy; Copyright 2022-{currentYear}, Khadim Hazir. All rights reserved.</p>
      </div>
    </div>
  </footer>;
  }
  export default Footer;