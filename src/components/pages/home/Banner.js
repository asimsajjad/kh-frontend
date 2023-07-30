import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import React, {useEffect} from "react";
import Cookies from 'js-cookie';

function Banner() {
  const { t, i18n } = useTranslation();

  const setLanguageFromCookie = () => {
    const storedLanguage = Cookies.get('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  };

  // Run the setLanguageFromCookie function only once when the component mounts
  useEffect(() => {
    setLanguageFromCookie();
  }, []);

  //   return <div className="main-banner" id="top" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
  //   <div className="container banner">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <div className="item header-text">
  //           <h2 className="heading-banner">{t('question')}</h2>
  //           <p className="pera-banner">{t("answer")}</p>
  //           <div className="down-buttons">
  //             <div className="main-blue-button-hover pt-5">
  //               <Link to="/labours" className="banner-btn ">{t("hire")}</Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-6 align-self-center">
  //         <img src="../assets/images/Working remotely.png" alt="aaa" className="img-banner" />
  //       </div>
  //     </div>
  //   </div>
  // </div>;
  }
  export default Banner;