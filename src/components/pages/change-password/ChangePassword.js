import { BrowserRouter as Router,Routes, Route, Link, useParams, Redirect, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';

function ChangePassword() {
  const { t , i18n} = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const user_id = localStorage.getItem('user_id')
  const changepassword_url='changePassword';

  useEffect(() => {
    if(user_id == null){
      navigate('/login');
    }
  }, []);

  const handleInputChange = (event) => {
    // Update the inputValue state with the new value from the input field
    setOldPassword(event.target.value);
  };
  const handlePasswordChange = (event) => {
    // Update the inputValue state with the new value from the input field
    setNewPassword(event.target.value);
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout (() => {
    setAlert(null);
    }, 300000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('old_password',  oldpassword,)
    formData.append('new_password',  newpassword,)
    formData.append('id',  user_id,)
    axios.post(`${changepassword_url}`, formData)
    .then(response =>{
    if(response?.data?.message?.success){
      // showAlert( response?.data?.message?.msg, "success");
      showAlert("yourHaveSuccessfullyUpdatedYourPassword", "success");
      
      // (setOldPassword(''));
      // (setNewPassword(''));
      setIsLoading(false);
    }else{
      // showAlert(response?.data?.message?.msg, "danger");
      showAlert("CurrentPasswordIsMismatchingTryAnotherPassword" , "danger");
      
      // (setNewPassword(''))
      setIsLoading(false);
    } 
    }).then(
      setNewPassword(''),
      setOldPassword(''))
    .catch(error => {
      console.error(error);
      setIsLoading(false);
    });    
  };
  
  function SubmitButton(){
    if (oldpassword && newpassword){
      return <button className="btn login-btn" type="submit">{t("update")}</button>  
    } 
    else {
      return <button className="btn login-btn" type="submit" disabled>{t("update")}</button>
    };
  };  

  const renderUser =(<section className="login-section pl-3">  
  <div className="container mt-5">
    <div className="row login-form ">
      <div className="col-md-8">
      <Alert alert={alert}/>
        <form onSubmit={handleSubmit}  method="POST">
          <h2 className="text-center mb-4 pt-4">{t("passwordUpdate")}</h2>
          {/* <div className="social-media-links d-flex justify-content-center pt-3">
          <Link to=""><i className="fa-brands fa-facebook"></i></Link>
            <Link href=""><i className="fa-brands fa-linkedin"></i></Link>
            <Link href=""><i className="fa-brands fa-google-plus"></i></Link>
          </div>
          <p className="text-center">Or use your email for registeration</p> */}
          <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
      <div className="name-input mb-4 d-flex">
        <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-lock"></i></label>
        <input
          type="password"
          id="oldpassword"
          name="oldpassword"
          placeholder={t("enterCurrentPassword")}
          value={oldpassword}
          onChange={handleInputChange}
        />
      </div>
      <div className="name-input mb-4 d-flex">
        <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-lock"></i></label>
        <input
          type="password"
          id="newpassword"
          name="newpassword"
          placeholder={t("enterNewPassword")}
          value={newpassword}
          onChange={handlePasswordChange}
        />
      </div>
      </div>
          <SubmitButton/>
        </form>
      </div>
      <div className="col-md-4 pl-0">
        <div className="login-details">
          <h3 className="text-light">{t("welcomeToKhadimHazir")}</h3>
          <p className="text-light">{t("ifYouWantToUpdateProfile")}</p>
          <Link className="contact" to="/profile-update">{t("profileUpdate")}<i className="ml-3 fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  </div>
</section>);

if(user_id != null){
  return  <> 
    {isLoading ? <LoadingSpinner /> : renderUser}
    </>
}
}
export default ChangePassword;