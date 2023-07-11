import { BrowserRouter as Router,Routes, Route, Link, useParams, Redirect, useNavigate    } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';


function Login() {
  const [user, setUser]=useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const url='loginUser';

  const handleChange = (e) => {
    const value=e.target.value;
    //console.log(value);
    setUser({
      ...user,
      [e.target.name]: value
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
  const handleSubmit = (e) => {
    e.preventDefault();
        const formData = new FormData()
        formData.append('email',  user.email,)
        formData.append('password',  user.password,)
        axios.post(`${url}`, formData)
        .then(response => {
          console.log(response?.data?.data);
          if(response?.data?.message?.success){
             localStorage.setItem('user_id', response?.data?.data[0].user_id)
            if(response?.data?.data[0].usertype=='employee'){
              //navigate('/categories');
              window.location.href = process.env.REACT_APP_BASE_URL+"categories";
            }else{                
              //navigate('/labours');
              window.location.href = process.env.REACT_APP_BASE_URL+"labours";
            }
          }else{
            (showAlert("Email or password is incorrect" , "danger"))
          } 
        })
        .catch(error => {
        console.error(error);
        });

  };

    return  <section className="login-section pl-3">
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-8 login-form1">
        <Alert alert={alert}/>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center pt-4">Login to your Account</h2>
            <div className="social-media-links d-flex justify-content-center pt-3">
            {/* <Link to=""><i class="fa-brands fa-facebook"></i></Link>
              <Link href=""><i class="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i class="fa-brands fa-google-plus"></i></Link> */}
            </div>
            <div className="name-input mb-3 d-flex mt-5">
              <label><i className="far fa-envelope"></i></label>
              <input className="" name="email" type="email" placeholder="Email" value={user.email} onChange={handleChange}/>
            </div>
            <div className="password-input d-flex">
              <label><i className="fas fa-lock	"></i></label>
              <input className="password-input" type="password" name="password" id="" placeholder="Password" value={user.password} onChange={handleChange}/>
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
            <button className="btn login-btn" type='submit'>Log in</button>
          </form>
        </div>
        <div className="col-md-4 pl-0">
          <div className="login-details">
            <h3 className="text-light">Welcome to Khadim Hazir</h3>
            <p className="text-light">To enjoy all features please login</p>
            <Link className="contact" to="/signup">Or Register here<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Login;