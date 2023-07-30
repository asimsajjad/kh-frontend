import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';

function ForgotPassword() {
  const { t, i18n } = useTranslation();
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
            const user=(response?.data?.message?.msg).replace(/ /g, '_');
              showAlert(user, "success")
            // showAlert( response?.data?.message?.msg, "success")
          }else{
            const user=(response?.data?.message?.msg).replace(/ /g, '_');
              showAlert(user, "danger")
            // showAlert(response?.data?.message?.msg, "danger")
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
          <h2 className="text-center pt-4">{t("forgotPassword")}</h2>
          <div className="social-media-links d-flex justify-content-center pt-3">
          {/* <Link to=""><i class="fa-brands fa-facebook"></i></Link>
            <Link href=""><i class="fa-brands fa-linkedin"></i></Link>
            <Link href=""><i class="fa-brands fa-google-plus"></i></Link> */}
          </div>
          
          <div className="name-input mb-4 d-flex mt-5" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <label htmlFor="" className={i18n.language === 'en' ? "": "pr-3"}><i className="far fa-envelope"></i></label>
            <input className="form-control" type="email" name='email' value={email.email} placeholder={t("enterEmail")} id="formGroupExampleInput2" onChange={handleChange} required/>
          </div>
         <button className="btn login-btn mt-5" type='submit'>{t("submit")}</button>
        </form>
      </div>
      <div className="col-md-4 pl-0">
        <div className="login-details">
          <h3 className="text-light">{t("welcomeToKhadimHazir")}</h3>
          <p className="text-light">{t("getNewPassword")}</p>
          <Link className="contact" to="/login">{t("orLogin")}<i className="ml-3 fas fa-arrow-right"></i></Link>
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