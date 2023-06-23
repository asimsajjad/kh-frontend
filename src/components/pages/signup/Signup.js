import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Signup() {
    return <section class="login-section pl-2">    
    <div class="container">
      <div class="row login-form ">
        <div class="col-md-8">
          <form action="">
            <h2 class="text-center">Create Account</h2>
            <div class="social-media-links d-flex justify-content-center">
              <a href=""><img src="assets/images/facebook icon.png" alt=""/></a>
              <a href=""><img src="assets/images/Linkdin.png" alt=""/></a>
              <a href=""><img src="assets/images/Google icon.png" alt=""/></a>
            </div>
            <p class="text-center">or use your email for register</p>
            <div class="name-input mb-4 d-flex">
              <label for=""><i class="bi bi-person-fill"></i></label>
              <input class="" type="name" placeholder="Name"/>
            </div>
            <div class="name-input mb-4 d-flex">
              <label for=""><i class="far fa-envelope"></i></label>
              <input class="" type="email" placeholder="Email"/>
            </div>
            <div class="password-input d-flex">
              <label for=""><i class="fas fa-lock	"></i></label>
              <input class="password-input" type="password" name="" id="" placeholder="Password"/>
            </div>
            <div class="row">
              <div class="col-6 text-left mt-2">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1">Remember me</label>
              </div>
            </div>
            <button class="btn login-btn">Sign-up</button>
          </form>
        </div>
        <a class="text-center mb-3 mobile-screen d-none" href="">Already have an Account<i
            class="ml-3 bi bi-arrow-right"></i></a>
        <div class="col-md-4 pr-0">
          <div class="details">
            <h3 class="text-light">Welcome</h3>
            <p class="text-light mb-5">to keep connected with us please
sign-up with your personal info </p>
            <Link class="text-light" to="/login">already have an Account<i class="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Signup;