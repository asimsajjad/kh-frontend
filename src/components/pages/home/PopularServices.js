import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../config/axios';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function PopularServices() {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);

    const url='popularCategories';
    useEffect(() => {
      const storedLanguage = Cookies.get('language') ? Cookies.get('language') : 'en';
        axios.get(`${url}`).then(response => {
          if(storedLanguage === "en"){
            setCategories(response?.data?.data?.en);
          }else if(storedLanguage === "ur"){
            setCategories(response?.data?.data?.ur);
          }else if(storedLanguage === "ar"){
            setCategories(response?.data?.data?.ar);
          }
       
        }).catch(error => {
        console.error(error);
      }); 
      
   }, []
   );
   
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return <section className="container-fluid services">
          <div className='container'  dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <div className="col-md-6 mb-3">
              <h2 className="mb-3 categories">{t("popular")}</h2>
            </div>
          </div>
          <div className="container mx-auto ">
            <div className="row slider mx-auto " >
              <Slider {...settings}>
                {categories.map(category => (
                  <div className="col-md-2" key={category.id}>
                   <div className="carousel-card text-center">
                      <Link to={`labours/${category.slug}`}>
                        <img className="img-fluid mx-auto rounded mx-auto d-block" src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`} alt={category.slug} />
                        <div className="card-body">
                          <p>{category.name}</p>
                        </div>
                      </Link>
                    </div>        
                  </div>
                ))}
          </Slider>
      </div>
      </div>
</section> 
}


export default PopularServices;