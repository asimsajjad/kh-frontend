import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';

function ForgotPassword() {
  const [email, setEmail]=useState('');
  const [alert, setAlert] = useState(null);
  const url='forgotPassword';

  const handleChange = (e) => {
    const value=e.target.value;
    // alert(value);
    setEmail({
      ...email,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        const formData = new FormData()
        formData.append('email',  email.email,)
        axios.post(`${url}`, formData)
        .then(response => {
          console.log(response?.data?.data)
        })
        .then(setEmail({email: "",}))
        .then(showAlert("We have sent a password to your email account. You can login with it and change it from profile" , "success"))
        .catch(error => {
        console.error(error);
        });
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    }, 30000);
  }
    return <section className="login-section pl-3">
    <div className="container">
      <div className="row ">
        <div className="col-md-8 login-form1">
        <Alert alert={alert}/>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Forget Password</h2>
            <div className="social-media-links d-flex justify-content-center">
              <Link to=""><img src="assets/images/facebook icon.png" alt=""/></Link>
              <Link to=""><img src="assets/images/Linkdin.png" alt=""/></Link>
              <Link to=""><img src="assets/images/Google icon.png" alt=""/></Link>
            </div>
            <div className="name-input mb-4 d-flex">
              <label for=""><i className="far fa-envelope"></i></label>
              <input className="" type="email" name='email' value={email.email} placeholder="Enter you registered Email here. We will send you a password on it." onChange={handleChange}/>
            </div>
           <button className="btn login-btn" type='submit' disabled={!email.email}>Submit</button>
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