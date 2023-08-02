import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';
import { BrowserRouter as Router,Routes, Route, Link  } from 'react-router-dom';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t, i18n } = useTranslation();
  const [contact, setContact] = useState('');
  const [alert, setAlert] = useState(null);
  const url='contactUs';
  const user_id = localStorage.getItem('user_id');
  const [isLoading, setIsLoading] = useState(false);
  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    }, 3000);
  }

  const handleChange = (e) => {
    const value=e.target.value;
    // alert(value);
    setContact({
      ...contact,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
        const formData = new FormData()
        formData.append('name',  contact.name,)
        formData.append('email',  contact.email,)
        formData.append('comments',  contact.comments,)
        axios.post(`${url}`, formData)
        .then(response => {
          if(response?.data?.message?.success){
            showAlert(response?.data?.message?.msg, "success")
          }else{
             showAlert(response?.data?.message?.msg, "danger")
          }
          console.log(response?.data?.data)
          setIsLoading(false);
         
        }).then(setContact(
          {name: "",
          email: "", 
          comments: ""})
        )
        .catch(error => {
        console.error(error);
        setIsLoading(false);
        });
  };

  function SubmitButton(){
    // if (contact.name && contact.email && contact.comments){
      return <button className="btn login-btn" type="submit">{t("submit")}</button>
    // } else {
      // return <button className="btn login-btn" type="submit" disabled>{t("submit")}</button>
    // };
  };

  const renderUser =(<section className="login-section pl-3"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>  
  <div className="container mt-5">
    <div className="row height500">
      <div className={i18n.language === 'en' ? "col-md-8 login-form1" : "col-md-8 login-form1-rtl"}>
      <Alert alert={alert}/>
        <form onSubmit={handleSubmit}> 
          <h2 className="text-center">{t("contactUs")}</h2>
          <div className="name-input mb-4 d-flex mt-3">
            <label className={i18n.language === 'en' ? 'form-label' : 'form-label mr-2'}>{t("name")}</label>
            <input type="text" name="name" placeholder={`${t("enterName")} (${t("required")})`} className="form-control" id="formGroupExampleInput" value={contact.name} onChange={handleChange} required
          />
          </div>
          <div className="password-input d-flex">
            <label className={i18n.language === 'en' ? 'form-label' : 'form-label mr-2'} style={{ width: '55px'}}>{t("email")}</label>
            <input type="email" className="form-control"  placeholder={`${t("enterEmail")} (${t("required")})`} name="email" id="formGroupExampleInput2" value={contact.email} onChange={handleChange} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required
        />
          </div>
          <div className="row">
            <div  className={i18n.language === 'en' ? 'col-12 text-left mt-3' : 'col-12 text-right mt-3'}>
              {/* <label className="text-left comment">{t("question1")}</label> */}
               <textarea className="form-control" name="comments" id="floatingTextarea2" placeholder={t("question1")} value={contact.comments} onChange={handleChange} required
          ></textarea>
            </div>              
          </div>
          <SubmitButton/>
        </form>
      </div>
      <div className={i18n.language === 'en' ? "col-md-4 pl-0" : "col-md-4 pr-0"}>
        <div className={i18n.language === 'en' ? "login-details" : "login-details-rtl"}>
          <h3 className="text-light ">{t("welcomeToKhadimHazir")}</h3>
          <p className="text-light">{t("moreFeatures")}</p>
          {(() => {
            if (user_id == null){
                return (
                  <p><Link to="/login" className='contact'>{t("login")}<i  className={i18n.language === 'en' ? 'ml-3 fas fa-arrow-right' : 'mr-3 fas fa-arrow-left'}></i></Link></p>     
                )
            }else{
              return (
                <p><Link to="/" className='contact'>{t("visitOurPage")}<i  className={i18n.language === 'en' ? 'ml-3 fas fa-arrow-right' : 'mr-3 fas fa-arrow-left'}></i></Link></p>
              )
              
            }              
          })()}
                    
        </div>
      </div>
    </div>
  </div>
</section>);
    return <>
    {isLoading ? <LoadingSpinner /> : renderUser} 
    </>
  }
  export default Contact;