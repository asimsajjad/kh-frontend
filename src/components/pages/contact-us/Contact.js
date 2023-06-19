function Contact() {
    return <section class="login-section pl-3">
    <div class="container mt-5">
      <div class="row height500">
        <div class="col-md-8 login-form1">
          <form action="">
            <h2 class="text-center">Contact Us</h2>
            <div class="name-input mb-4 d-flex">
              <label for="formGroupExampleInput" class="form-label">Name</label>
              <input type="name" class="form-control" id="formGroupExampleInput" />
            </div>
            <div class="password-input d-flex">
              <label for="formGroupExampleInput2" class="form-label ">Email</label>
              <input type="email" class="form-control" id="formGroupExampleInput2" />
            </div>
            <div class="row">
              <div class="col-12 text-left mt-3">
                <label class="text-left comment" for="floatingTextarea2">What can we help you with?</label>
                 <textarea class="form-control" id="floatingTextarea2"></textarea>
              </div>              
            </div>
             <button class="btn login-btn">Submit</button>
          </form>
        </div>
        <div class="col-md-4 pl-0">
          <div class="login-details">
            <h3 class="text-light ">Welcome Back</h3>
            <p class="text-light mb-5 mt-5">to keep connected with us please </p>
              <p>Login with your personal info</p>            
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Contact;