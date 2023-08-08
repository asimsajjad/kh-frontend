import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const user_id = localStorage.getItem('user_id');

  const setLanguageFromCookie = () => {
    const storedLanguage = Cookies.get('language') ? Cookies.get('language') : 'en';
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  };

  // Run the setLanguageFromCookie function only once when the component mounts
  useEffect(() => {
    setLanguageFromCookie();
  }, []);

  const Logout = (e) => {
    localStorage.removeItem('user_id');
    sessionStorage.removeItem('user_id');
    navigate('/login');
  };

  return (
    <footer className="text-white py-2 mt-5" >
      <div className="container footer mt-5">
        <div className="row">
          <div className="col-md-3">
            <Link to="/" className="navbar-brand">
              <img src={i18n.language === 'en' ? `${process.env.REACT_APP_BASE_URL}assets/images/kh-logo.png` : `${process.env.REACT_APP_BASE_URL}assets/images/kh-logo-large-rtl.png`} alt="Logo" className="footer" />
            </Link>
            <p className="foot"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>{t('footerDescription')}</p>
          </div>
          <div className="col-lg-3"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <h4 className="text-white mb-4 ml-5">{t('forClients')}</h4>
            <ul className="list-unstyled ml-5">
              <li>
                <Link to="/">{t('home')}</Link>
              </li>
              <li>
                <Link to="/categories">{t('findWork')}</Link>
              </li>
              <li>
                <Link to="/labours">{t('findLabours')}</Link>
              </li>
              <li>
                <Link to="/contact-us">{t('contactUs')}</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <h4 className="text-white mb-4 ml-5">{t('forLabours')}</h4>
            <ul className="list-unstyled ml-5"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
              {(() => {
                if (user_id == null) {
                  return (
                    <li>
                      <Link to="/signup" className="foot">
                        {t('createAccount')}
                      </Link>
                    </li>
                  );
                } else {
                  return <li><Link to="/profile-update">{t('profileUpdate')}</Link></li>;
                }
              })()}
              <li>
                <Link to="/categories">{t('findWork')}</Link>
              </li>
              <li>
                <Link to="/contact-us">{t('contactUs')}</Link>
              </li>
              {(() => {
                if (user_id == null) {
                  return (
                    <li>
                      <Link to="/labours">{t('findLabours')}</Link>
                    </li>
                  );
                } else {
                  return <li><Link to="login" onClick={Logout}>{t('logout')}</Link></li>;
                }
              })()}
            </ul>
          </div>
          <div className="col-lg-3"  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <h4 className="text-white mb-4">{t('callUs')}</h4>
            <p className="foot">
              <i className="mr-2 fa fa-map-marker"></i>
              {t('address')}
            </p>
            <a href="https://api.whatsapp.com/send?phone=03346929604" className="contact">
              <i className="mr-2 fa fa-phone"></i>+923346929604</a><p></p>
            <a href="mailto:info@ratedsolution.com" className="contact">
              <i className="mr-2 fa fa-envelope"></i>info@ratedsolution.com
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/terms" className="policy">
            {t('termsAndConditions')}
          </Link>
          <p className="footer">{t('rightsReserved')} 2022-{currentYear} {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
