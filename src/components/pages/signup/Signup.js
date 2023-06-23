import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Signup() {
    return <section className="login-section pl-2">    
    <div className="container">
      <div className="row login-form ">
        <div className="col-md-8">
          <form action="">
            <h2 className="text-center">Create Account</h2>
            <div className="social-media-links d-flex justify-content-center">
              <Link to=""><img src="assets/images/facebook icon.png" alt=""/></Link>
              <Link href=""><img src="assets/images/Linkdin.png" alt=""/></Link>
              <Link href=""><img src="assets/images/Google icon.png" alt=""/></Link>
            </div>
            <p className="text-center">or use your email for register</p>
            <div className="name-input mb-4 d-flex">
              <label for=""><i className="bi bi-person-fill"></i></label>
              <input className="" type="name" placeholder="Name"/>
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
            </div>
            <button className="btn login-btn">Sign-up</button>
          </form>
        </div>
        <Link className="text-center mb-3 mobile-screen d-none" href="">Already have an Account<i
            className="ml-3 bi bi-arrow-right"></i></Link>
        <div className="col-md-4 pr-0">
          <div className="details">
            <h3 className="text-light">Welcome</h3>
            <p className="text-light mb-5">to keep connected with us please
sign-up with your personal info </p>
            <Link className="text-light" to="/login">already have an Account<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Signup;