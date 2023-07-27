import { BrowserRouter as Router,Routes, Route, Link, useParams, Redirect, useNavigate    } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  const [user, setUser]=useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const url='loginUser';
  const [isLoading, setIsLoading] = useState(false);
  const user_id = localStorage.getItem('user_id');

 
  useEffect(() => {
    if(user_id != null){
      navigate('/labours');
    }
  }, []);

  const handleChange = (e) => {
    const value=e.target.value;
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
    setIsLoading(true);
        const formData = new FormData()
        formData.append('email',  user.email,)
        formData.append('password',  user.password,)
        axios.post(`${url}`, formData)
        .then(response => {
          // console.log(response?.data?.data);
          setIsLoading(false);
          if(response?.data?.message?.success){
             localStorage.setItem('user_id', response?.data?.data[0].user_id)
             showAlert( response?.data?.message?.msg, "success")
            if(response?.data?.data[0].usertype=='employee'){
              // window.location.href = "categories";
              navigate("/categories");
            }else{                
              // window.location.href = "labours";
              navigate("/labours");
            }
          }else{
            showAlert(response?.data?.message?.msg, "danger")
          } 
        })
        .catch(error => {
          setIsLoading(false);
        console.error(error);
        });

  };

  const renderUser=(
  <section className="login-section pl-3">
  <div className="container mt-5">
    <div className="row ">
      <div className="col-md-8 login-form1">
      <Alert alert={alert}/>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pt-4">{t("loginToYourAccount")}</h2>
          <div className="social-media-links d-flex justify-content-center pt-3">
          {/* <Link to=""><i class="fa-brands fa-facebook"></i></Link>
            <Link href=""><i class="fa-brands fa-linkedin"></i></Link>
            <Link href=""><i class="fa-brands fa-google-plus"></i></Link> */}
          </div>
          <div className="name-input mb-3 d-flex mt-5">
            <label><i className="far fa-envelope"></i></label>
            <input className="" name="email" type="email" placeholder={t("email")} value={user.email} onChange={handleChange}/>
          </div>
          <div className="password-input d-flex">
            <label><i className="fas fa-lock	"></i></label>
            <input className="password-input" type="password" name="password" id="" placeholder={t("password")} value={user.password} onChange={handleChange}/>
          </div>
          <div className="row">
            <div className="col-6 text-left mt-2">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <label>&nbsp;&nbsp;{t("rememberMe")}</label>
            </div>
            <div className="col-6 text-right mt-2">
              <Link to="/forgot-password">{t("forgotPassword")}<i className="ml-3 bi bi-arrow-right"></i></Link>
            </div>
          </div>
          <button className="btn login-btn" type='submit'>{t("login")}</button>
        </form>
      </div>
      <div className="col-md-4 pl-0">
        <div className="login-details">
          <h3 className="text-light">{t("welcomeToKhadimHazir")}</h3>
          <p className="text-light">{t("toEnjoyAllFeatures")}</p>
          <Link className="contact" to="/signup">{t("orRegisterHere")}<i className="ml-3 fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  </div>
</section>
);
if(user_id == null){
  return  <> 
    {isLoading ? <LoadingSpinner /> : renderUser}
    </>
}
  
  }
  export default Login;