import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Login() {
    return  <section className="login-section pl-3">
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-8 login-form1">
          <form action="">
            <h2 className="text-center pt-4">Login to your Account</h2>
            <div className="social-media-links d-flex justify-content-center pt-3">
            {/* <Link to=""><i class="fa-brands fa-facebook"></i></Link>
              <Link href=""><i class="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i class="fa-brands fa-google-plus"></i></Link> */}
            </div>
            <div className="name-input mb-3 d-flex mt-5">
              <label><i className="far fa-envelope"></i></label>
              <input className="" type="email" placeholder="Email"/>
            </div>
            <div className="password-input d-flex">
              <label><i className="fas fa-lock	"></i></label>
              <input className="password-input" type="password" name="" id="" placeholder="Password"/>
            </div>
            <div className="row">
              <div className="col-6 text-left mt-2">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label>Remember me</label>
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
            <h3 className="text-light">Welcome to Khadim Hazir</h3>
            <p className="text-light">To enjoy all features please login</p>
            <Link className="text-light" to="/signup">Or Register here<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Login;