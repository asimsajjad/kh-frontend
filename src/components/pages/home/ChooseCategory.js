import React, { useState, useEffect, useContext } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function ChooseCategory() {
  const { t, i18n } = useTranslation();
  const [categories, setcategories] = useState([]);
  // const language  = useContext(LanguageContext);
 
  useEffect(() => {
    const storedLanguage = Cookies.get('language') ? Cookies.get('language') : 'en';
    const formData = new FormData()
    axios.get('sevenCategories/8', formData,)
      .then(response => {
        if(storedLanguage === "en"){
          setcategories(response?.data?.data?.en);
        }else if(storedLanguage === "ar"){
          setcategories(response?.data?.data?.ar);
        }else if(storedLanguage === "ur"){
          setcategories(response?.data?.data?.ur);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (<>
    <div className="container mb-5">
      <h1 className="Category" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>{t("choose")} </h1>
    </div>
    <div className="container"> 
    <div className="row">
    {categories.map(category => (
      <div className="col-md-3 mb-3" key={category.id}>
        <Link to={`/labours/${category.slug}`}>
        <div className="card">
          <div className="card-body categories">
          
            <img src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`}
             alt={category.image} className="categories rounded mx-auto d-block" />       
          </div>
        </div>
        <div className="card-body cuntent text-center">
          <p to={`/labours/${category.slug}`} className="category m-3"> {category.name}</p>
        </div>
        </Link>
      </div> 

      ))}
      </div>
    </div>
    <div className="container mt-3">
    <div className="col-md-12  text-center text-center">
    <Link to="/categories"><button className="btn Categoryies-btn align-self-center">{t("moreCategories")}</button></Link>
    </div>
  </div> 
    </>
  );
}
export default React.memo(ChooseCategory);