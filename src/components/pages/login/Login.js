import React from 'react';
function Login() {
    return  <section class="login-section pl-3">
    <div class="container mt-5">
      <div class="row ">
        <div class="col-md-8 login-form1">
          <form action="">
            <h2 class="text-center">Login to your Account</h2>
            <div class="social-media-links d-flex justify-content-center">
              <a to="/login"><img src="assets/images/facebook icon.png" alt="" /></a>
              <a href=""><img src="assets/images/Linkdin.png" alt=""/></a>
              <a href=""><img src="assets/images/Google icon.png" alt=""/></a>
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
              <div class="col-6 text-right mt-2">
                <a href="forget-password.php">Forget Password<i class="ml-3 bi bi-arrow-right"></i></a>
              </div>
            </div>
            <button class="btn login-btn">Log in</button>
          </form>
        </div>
        <div class="col-md-4 pl-0">
          <div class="login-details">
            <h3 class="text-light">Welcome Back</h3>
            <p class="text-light mb-5">to keep connected with us please
register with your personal info </p>
            <a class="text-light" href="sign-up.html">don't have an Account<i class="ml-3 fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Login;