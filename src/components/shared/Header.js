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
    const storedLanguage = Cookies.get('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar">
          <Link to="/" className="navbar-brand logo pl-4">
            <img src="assets/images/kh-logo.png" alt="Logo" />
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img className="toogler-img" src="assets/images/download.svg" alt="" />
          </button> */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pr-5">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light" aria-current="page">
                  {t('home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link text-light">
                  {t('findWork')}
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
                    <li className="nav-item">
                      <Link to="/login" className="nav-link text-light">
                        {t('login')}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    [
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 pr-5" key={user_id}>
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
            {/* <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ar')}>العربية</button>
          <button onClick={() => changeLanguage('ur')}>اردو</button> */}
          <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="ur">اردو</option>
          </select>
            
          </div>
        </div>
      </nav>
      <Alert alert={alert} />
    </>
  );
}

export default Header;
