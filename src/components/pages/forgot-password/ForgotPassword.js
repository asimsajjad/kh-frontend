import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function ForgotPassword() {
    return <section className="login-section pl-3">
    <div className="container">
      <div className="row ">
        <div className="col-md-8 login-form1">
          <form action="">
            <h2 className="text-center">Forget Password</h2>
            <div className="social-media-links d-flex justify-content-center">
              <Link to=""><img src="assets/images/facebook icon.png" alt=""/></Link>
              <Link to=""><img src="assets/images/Linkdin.png" alt=""/></Link>
              <Link to=""><img src="assets/images/Google icon.png" alt=""/></Link>
            </div>
            <div className="name-input mb-4 d-flex">
              <label for=""><i className="far fa-envelope"></i></label>
              <input className="" type="email" placeholder="Email"/>
            </div>
           
         
            <button className="btn login-btn">Submit</button>
          </form>
        </div>
        <div className="col-md-4 pl-0">
          <div className="login-details">
            <h3 className="text-light">Welcome Back</h3>
            <p className="text-light mb-5">to keep connected with us please </p>
            <p>Login with your personal info</p>
            <Link className="text-light" to="/login">Already have account<i className="ml-3 bi bi-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
export default ForgotPassword;