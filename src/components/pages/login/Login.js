import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Login() {
    return  <section className="login-section pl-3">
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-8 login-form1">
          <form action="">
            <h2 className="text-center">Login to your Account</h2>
            <div className="social-media-links d-flex justify-content-center">
              <Link to="/login"><img src="assets/images/facebook icon.png" alt="" /></Link>
              <Link to=""><img src="assets/images/Linkdin.png" alt=""/></Link>
              <Link to=""><img src="assets/images/Google icon.png" alt=""/></Link>
            </div>
            <div className="name-input mb-4 d-flex">
              <label for=""><i className="far fa-envelope"></i></label>
              <input className="" type="email" placeholder="Email"/>
            </div>
            <div className="password-input d-flex">
              <label for=""><i className="fas fa-lock	"></i></label>
              <input className="password-input" type="password" name="" id="" placeholder="Password"/>
            </div>
            <div className="row">
              <div className="col-6 text-left mt-2">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1">Remember me</label>
              </div>
              <div className="col-6 text-right mt-2">
                <Link to="/forgot-password">Forget Password<i className="ml-3 bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <button className="btn login-btn">Log in</button>
          </form>
        </div>
        <div className="col-md-4 pl-0">
          <div className="login-details">
            <h3 className="text-light">Welcome Back</h3>
            <p className="text-light mb-5">to keep connected with us please
register with your personal info </p>
            <Link  className="text-light" to="/signup">don't have an Account<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Login;