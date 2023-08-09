import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../components/Alerts/alert';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function Header() {
  const { t, i18n } = useTranslation();
  const [alert, setAlert] = useState(null);
  const user_id = localStorage.getItem('user_id');
  const navigate = useNavigate();
  const saveLanguagePreference = (lng) => {
    Cookies.set('language', lng, { expires: 365 }); // Set the cookie to expire in 365 days
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const Logout = (e) => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('employer_latitude');
    localStorage.removeItem('employer_longitude');
    localStorage.removeItem('user_type');
    sessionStorage.removeItem('user_id');
    showAlert(t('youHaveLoggedOut'), 'success');
    navigate('/login');
  };
  const Labours = () =>{
    window.location.href= "/labours";
    }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    saveLanguagePreference(lng);
    window.location.reload();
    // console.log(lng);
  };

  useEffect(() => {
    const storedLanguage = Cookies.get('language') ? Cookies.get('language') : 'en';
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <nav className="navbar navbar-expand-lg pl-2">
        <div className="container-fluid navbar">
        <div className="row">
        <div className="col-md-2">

        <Link to="/" className="navbar-brand logo pl-4">
            <img src={i18n.language === 'en' ? `${process.env.REACT_APP_BASE_URL}assets/images/kh-logo.png` : `${process.env.REACT_APP_BASE_URL}assets/images/kh-2.png`} alt="Logo" className='logo' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img className="toogler-img" src="assets/images/download.svg" alt="" />
          </button> 

        </div>
        <div className="col-md-9 ml-4">
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className={i18n.language === 'en' ? "navbar-nav me-auto mb-2 mb-lg-0" : "navbar-nav me-auto mb-2 mb-lg-0 pl-5"}  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
              <li className="nav-item">
                <Link to="/" className="nav-link text-light" aria-current="page">
                  {t('home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link text-light">
                  {t('categories')}
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={Labours} className="nav-link text-light">
                  {t('findLabours')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link text-light">
                  {t('contactUs')}
                </Link>
              </li>
              {(() => {
                if (user_id == null) {
                  return (
                    <ul className={i18n.language === "en" ? "navbar-nav me-auto mb-2 mb-lg-0" : "navbar-nav me-auto mb-2 mb-lg-0 pl-3"} key={user_id}>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link text-light">
                        {t('login')}
                      </Link>
                    </li>
                    </ul>
                  );
                } else {
                  return (
                    [
                      <ul className={i18n.language === "en" ? "navbar-nav me-auto mb-2 mb-lg-0" : "navbar-nav me-auto mb-2 mb-lg-0 pl-3"} key={user_id}>
                        <li className="nav-item">
                          <Link to="/profile-update" className="nav-link text-light">
                            {t('profile')}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="login" className="nav-link text-light" onClick={Logout}>
                            {t('logout')}
                          </Link>
                        </li>
                      </ul>,
                    ]
                  );
                }
              })()}
            </ul>
            <select
                className="nav-link text-light select pl-1 mt-1" // Add the custom-select class here
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}>
                <option className="option" value="en">English</option>
                <option className="option" value="ar">العربية</option>
                <option className="option" value="ur">اردو</option>
              </select>
          
          </div>

        </div>

        </div>
        
       
        </div>
      </nav>
      <Alert alert={alert} />
    </>
  );
}

export default Header;
