function ForgotPassword() {
    return <section class="login-section pl-3">
    <div class="container">
      <div class="row ">
        <div class="col-md-8 login-form1">
          <form action="">
            <h2 class="text-center">Forget Password</h2>
            <div class="social-media-links d-flex justify-content-center">
              <a href=""><img src="assets/images/facebook icon.png" alt=""/></a>
              <a href=""><img src="assets/images/Linkdin.png" alt=""/></a>
              <a href=""><img src="assets/images/Google icon.png" alt=""/></a>
            </div>
            <div class="name-input mb-4 d-flex">
              <label for=""><i class="far fa-envelope"></i></label>
              <input class="" type="email" placeholder="Email"/>
            </div>
           
         
            <button class="btn login-btn">Submit</button>
          </form>
        </div>
        <div class="col-md-4 pl-0">
          <div class="login-details">
            <h3 class="text-light">Welcome Back</h3>
            <p class="text-light mb-5">to keep connected with us please </p>
            <p>Login with your personal info</p>
            <a class="text-light" href="sign-up.html">Already have account<i class="ml-3 bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
export default ForgotPassword;