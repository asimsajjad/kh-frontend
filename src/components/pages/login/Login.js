import { BrowserRouter as Router,Routes, Route, Link, useParams, Redirect, useNavigate    } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';
// import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'; // Import the necessary functions from the library

function Login() {
  const { t, i18n } = useTranslation();
  // const [user, setUser]=useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const url='loginUser';
  const [isLoading, setIsLoading] = useState(false);
  const user_id = localStorage.getItem('user_id');

  // const [userLocation, setUserLocation] = useState(null);

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     // const options = {
  //     //   enableHighAccuracy: true,
  //     //   timeout: 5000,
  //     //   maximumAge: 0,
  //     // };
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setUserLocation({ latitude, longitude });
  //       },
  //       (error) => {
  //         console.error(error.message);
  //       },
  //       // options
  //     );
  //   } else {
  //     console.log("Geolocation is not available in this browser.");
  //   }
  // }, []);

// console.log(userLocation); 
  useEffect(() => {
    document.title = `Khadim Hazir | Login`;
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
          // console.log(userLocation);
          setIsLoading(false);
          if(response?.data?.message?.success){
            // console.log
             localStorage.setItem('user_id', response?.data?.data[0].user_id)
             localStorage.setItem('user_type', response?.data?.data[0].usertype)
            //  showAlert( response?.data?.message?.msg, "success")
             showAlert("YouhaveLoggedInSuccesfully", "success")
            if(response?.data?.data[0].usertype=='employee'){
              // window.location.href = "categories";
              navigate("/categories");
            }else{                
              // window.location.href = "labours";
              navigate("/labours");
               localStorage.setItem('employer_latitude', (response?.data?.data[0].latitude))
             localStorage.setItem('employer_longitude', (response?.data?.data[0].longitude))
            }
          }else{
            // showAlert(response?.data?.message?.msg, "danger")
            showAlert("YourEmailOrPasswordIsWrong", "danger")
          } 
        })
        .catch(error => {
          setIsLoading(false);
        console.error(error);
        });

  };

  const renderUser=(
  <section className="login-section pl-3"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
  <div className="container mt-5">
    <div className="row ">
      <div className={i18n.language === 'en' ? "col-md-8 login-form1" : "col-md-8 login-form1-rtl"}>
        
      <Alert alert={alert}/>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pt-4">{t("loginToYourAccount")}</h2>
          <div className="social-media-links d-flex justify-content-center pt-3">
          {/* <Link to=""><i class="fa-brands fa-facebook"></i></Link>
            <Link href=""><i class="fa-brands fa-linkedin"></i></Link>
            <Link href=""><i class="fa-brands fa-google-plus"></i></Link> */}
          </div>
          <div>
          <div className="name-input mb-3 d-flex mt-5">
            <label  className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="far fa-envelope"></i></label>
            <input className="" name="email" type="email" placeholder={t("email")} value={user.email} onChange={handleChange} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"/>
          </div>
          <div className="password-input d-flex">
            <label  className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-lock	"></i></label>
            <input className="password-input" type="password" name="password" id="" placeholder={t("password")} value={user.password} onChange={handleChange} required/>
          </div>
          <div className="row">
            <div className={i18n.language === 'en' ? "col-6 text-left mt-2" : "col-6 text-right mt-2"}>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <label>&nbsp;&nbsp;{t("rememberMe")}</label>
            </div>
            <div className={i18n.language === 'en' ? "col-6 text-right mt-2" : "col-6 text-left mt-2"}>
              <Link to="/forgot-password">{t("forgotPassword")}<i className="ml-3 bi bi-arrow-right"></i></Link>
            </div>
          </div>
          </div>
          <button className="btn login-btn" type='submit'>{t("login")}</button>
        </form>
      </div>
      <div className={i18n.language === 'en' ? "col-md-4 pl-0" : "col-md-4 pr-0"}>
        <div className={i18n.language === 'en' ? "login-details" : "login-details-rtl"}>
          <h3 className="text-light">{t("welcomeToKhadimHazir")}</h3>
          <p className="text-light">{t("toEnjoyAllFeatures")}</p>
          <Link className="contact" to="/signup">{t("orRegisterHere")}<i className={i18n.language === 'en' ? 'ml-3 fas fa-arrow-right' : 'mr-3 fas fa-arrow-left'}></i></Link>
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