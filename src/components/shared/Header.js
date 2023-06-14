function Header() {
    return <nav className="navbar navbar-expand-lg">
    <div className="container-fluid navbar">
      <a className="navbar-brand pl-5 ml-3 logo" href="index.html">
        <img src="assets/images/logo.png" alt="" width="253px"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img className="toogler-img" src="assets/images/download.svg" alt="" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pr-5">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="categories.html">Find Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="services.html">Find Freelancers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="Contact us.html">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="login.html">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="sign-up.html">Sign Up</a>
          </li>
          </ul>
      </div>
    </div>
  </nav>;
  }
  export default Header;