import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';
import LoadingSpinner from "../../loader/LoadingSpinner";

function ForgotPassword() {
  const [email, setEmail]=useState('');
  const [alert, setAlert] = useState(null);
  const url='forgotPassword';
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value=e.target.value;
    // alert(value);
    setEmail({
      ...email,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
        const formData = new FormData()
        formData.append('email',  email.email,)
        axios.post(`${url}`, formData)
        .then(response => {
          setIsLoading(false);
          console.log(response?.data?.data)
          if(response?.data?.message?.success){
            showAlert( response?.data?.message?.msg, "success")
          }else{
            showAlert(response?.data?.message?.msg, "danger")
          }
        })
        .then(setEmail({email: "",}))
        .catch(error => {
        console.error(error);
        setIsLoading(false);
        });
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    }, 3000);
  }

  const renderUser = (<section className="login-section pl-3">
  <div className="container mt-5">
    <div className="row ">
      <div className="col-md-8 login-form1">
      <Alert alert={alert}/>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pt-4">Forget Password</h2>
          <div className="social-media-links d-flex justify-content-center pt-3">
          {/* <Link to=""><i class="fa-brands fa-facebook"></i></Link>
            <Link href=""><i class="fa-brands fa-linkedin"></i></Link>
            <Link href=""><i class="fa-brands fa-google-plus"></i></Link> */}
          </div>
          <div className="name-input mb-4 d-flex mt-5">
            <label htmlFor=""><i className="far fa-envelope"></i></label>
            <input className="form-control" type="email" name='email' value={email.email} placeholder="Enter your registered email here." id="formGroupExampleInput2" onChange={handleChange}/>
          </div>
         <button className="btn login-btn mt-5" type='submit' disabled={!email.email}>Submit</button>
        </form>
      </div>
      <div className="col-md-4 pl-0">
        <div className="login-details">
          <h3 className="text-light">Welcome khadim Hazir</h3>
          <p className="text-light">Enter your registered email to get new password</p>
          <Link className="contact" to="/signup">Or Create new account<i className="ml-3 fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  </div>
</section>);
    return <>
    {isLoading ? <LoadingSpinner /> : renderUser}
    </> 
}
export default ForgotPassword;