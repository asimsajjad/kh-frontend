import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

function Categories() {
  const { t } = useTranslation();
  const [labour, setLabour] = useState([]);
  const [category, setCategory] = useState([]);
  const { type } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrenPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const user_id = localStorage.getItem("user_id");
  const usertype = localStorage.getItem("user_type");
  const employer_latitude = localStorage.getItem("employer_latitude");
  const employer_longitude = localStorage.getItem("employer_longitude");
  const category_url = "";

  useEffect(() => {
    setIsLoading(true);
    const storedLanguage = Cookies.get('language') ? Cookies.get('language') : 'en';
    axios
      .get(`${category_url}`)
      .then((response) => {
        if (storedLanguage === "en") {
          setCategory(response?.data?.data?.en);
        } else if (storedLanguage === "ur") {
          setCategory(response?.data?.data?.ur);
        } else if (storedLanguage === "ar") {
          setCategory(response?.data?.data?.ar);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
    loadEmployees(type);
  }, [type]);

  function loadEmployees(slug = type) {
    setIsLoading(true);
    document.title = `Khadim Hazir | Labours`;
    const storedLanguage = Cookies.get('language') ? Cookies.get('language') : 'en';
    const formData = new FormData();
    if (!user_id) {
      formData.append("user_id", "");
    } else {
      formData.append("user_id", user_id);
    }
    formData.append("category_id", "");
    formData.append("category_slug", slug);
    if (employer_latitude != null) {
      formData.append("employer_latitude", employer_latitude);
      formData.append("employer_longitude", employer_longitude);
    }
    const url = "employeesListing";
    axios
      .post(`${url}/multilang`, formData)
      .then((response) => {
        if (storedLanguage === "en") {
          setLabour(response?.data?.data?.en);
          
        } else if (storedLanguage === "ur") {
          setLabour(response?.data?.data?.ur);
        } else if (storedLanguage === "ar") {
          setLabour(response?.data?.data?.ar);
        }
        setCurrenPage(1);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  const records = labour.slice(firstIndex, lastIndex);
  const npage = Math.ceil(labour.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrenPage(currentPage - 1);
    }
  }

  function changeCpage(id) {
    setCurrenPage(id);
  }

  function nextPage() {
    if (currentPage === npage) {
      setCurrenPage(1);
    } else {
      setCurrenPage(currentPage + 1);
    }
  }

  const activeCategoryIndex = category.findIndex(
    (category_data) => category_data.slug === type
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    // initialSlide:1,
    initialSlide: activeCategoryIndex >= 0 ? activeCategoryIndex : 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
      
  const renderUser=(<div>
    <div className="container top-btns pt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="category-tabs justify-content-left">
            <Slider {...settings}>
              <Link to="/labours" className={`btn tab-btn2 mr-4 ml-4  ${!type ? "active" : ""}`} 
              onClick={()=>loadEmployees('')}  role="button">{t("all")}</Link>    
              {category.map(category_data => (
                <div key={category_data.id}>
                  <Link to={`/labours/${category_data.slug}`} className={`btn plum tab-btn2 mr-5 ${(type===category_data.slug) ? "active" : ""}`}
                  value={category_data.slug} role="button" onClick={()=>loadEmployees(category_data.slug)}  >{category_data.name}</Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-4">
      <div className="row">
        {records.map((labour_data) => (
          <div className="col-md-6 mt-4" key={labour_data.employee_id}>         
            <div className="profile-card d-flex">
              <img src={labour_data.image ? `${process.env.REACT_APP_RESOURCES_URL}images/${labour_data.image}` : `${process.env.REACT_APP_BASE_URL}assets/images/manager.png`} placeholder="no image" className="card-img-top rounded-circle" />    
              <div className="col-md-8 profile-card-body">
                <h5 className="card-title plum s">{labour_data.username}</h5>
                <div className="name d-flex">
                  <div className="row">
                    <div className="col-md-4 ">
                      <p className="name-para">{labour_data.category_name}</p>
                    </div>
                    <div className="col-md-8 ">
                      {(() => {
                        if (user_id == null && labour_data.country != ''){
                          return (<p><i className="bi mr-2 bi-geo-alt-fill fas fa-location-arrow"></i>{(labour_data.country)}</p>)
                        }
                        else if(usertype == "employee" && labour_data.country !=''){
                          return (<p><i className="bi mr-2 bi-geo-alt-fill fas fa-location-arrow"></i>{(labour_data.country)}</p>)
                        }
                        else if(user_id != null && usertype== 'employer'){
                          if((labour_data.distance !== '')  && (labour_data.country !== '')){
                            return (<p><i className="bi mr-2 bi-geo-alt-fill fas fa-location-arrow"></i>{labour_data.country} {(labour_data.distance)}km {t("away")}</p>)
                          }else if(labour_data.distance !== '' && labour_data.country === ''){
                            return (<p><i className="bi mr-2 bi-geo-alt-fill fas fa-location-arrow"></i>{(labour_data.distance)}km {t("away")}</p>)
                          }else if(labour_data.distance === '' && (labour_data.country !== '')){
                            return (<p><i className="bi mr-2 bi-geo-alt-fill fas fa-location-arrow"></i>{(labour_data.country)}</p>)
                          }else if(labour_data.distance ==='' && labour_data.country === ''){
                            return (<p></p>)
                          } 
                        }else{
                          return (<p></p>)
                        }
                      })()} 
                    </div>
                  </div>
                </div>  
                <div className="available d-flex">
                  <div className="row">
                    <div className="col-md-4">
                      <p className="mr-5" style={{color: "blue"}}>{t("availible")}</p> 
                    </div>
                    <div className="col-md-8">
                      {(() => {
                        if (user_id == null){
                          return (<Link to="/login" className="btn profile-btn">{t("profile")}</Link>)
                        }else{
                          return (<Link to={`/profile/${labour_data.slug}`} className="btn profile-btn">{t("profile")}</Link>)
                        }              
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      {(() => {
        if (npage>1) {
          return (
          <ul className='pagination' style={{justifyContent: 'center'}}>
            <li className='page-item'>
              <Link to="/labours" className="page-link" onClick={prePage}>{t("previous")}</Link>
            </li>
            {numbers.map((n, i) =>(
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <Link to="/labours" className="page-link" onClick={()=> changeCpage(n)}>{n}</Link>
              </li>
            ))}
            <li className='page-item'>
              <Link to="/labours" className="page-link" onClick={nextPage}>{t("next")}</Link>
            </li>
          </ul>
          )
        } 
      })()}
    </div>
  </div>);
  return <>
    {isLoading ? <LoadingSpinner /> : renderUser}  
  </>;
 }
 export default Categories;