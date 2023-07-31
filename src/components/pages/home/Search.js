import React, { useState, useEffect, useRef } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function Search() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showList, setShowList] = useState(false);
  const [categoryAvailable, setCategoryAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [columntosearch, setColumnToSearch] = useState('');
  // const column_to_search='ur_name';
  // const storedLanguage = Cookies.get('language');

  const categories_url = 'index';
  useEffect(() => {
    const storedLanguage = Cookies.get('language');
    axios
      .get(`${categories_url}`)
      .then((response) => {
        // setCategories(response?.data?.data?.en);
        if(storedLanguage === "en"){
          setCategories(response?.data?.data?.en);
          setColumnToSearch('name');
        }else if(storedLanguage === "ar"){
          setCategories(response?.data?.data?.ar);
          setColumnToSearch('ar_name');
        }else if(storedLanguage === "ur"){
          setCategories(response?.data?.data?.ur);
          setColumnToSearch('ur_name');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCategoryAvailable(true); // Reset category availability when the user starts typing
    if (!event.target.value) {
      setFilteredCategories(categories);
      setShowList(false);
    } else {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowList(true);
    }
  };

  const handleCategorySelect = (categoryName) => {
    setSearchQuery(categoryName);
    setFilteredCategories(categories);
    setShowList(false);
  };

  const handleSearch = () => {
    setIsLoading(true);
    const formData = new FormData();
    const user=(searchQuery).replace(/ /g, '-');
    formData.append('category_slug', user,)
    

    axios
      .post(`${categories_url}/${columntosearch}`, formData)
      .then((response) => {
        if (response?.data?.data[0]) {
          console.log(response?.data?.data[0].slug);
          navigate(`/labours/${response?.data?.data[0].slug}`);
          setCategoryAvailable(true);
        } else {
          setCategoryAvailable(false);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const renderUser = (<div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
  <div className="container search pt-4 mt-4">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="" ref={searchRef}>
            <div classNae="search-box mb-1" style={{border : "2px solid #673AB7"}}>
              <i className="fas fa-search pl-2 "></i>
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                className={i18n.language === 'en' ? "search-input pl-2" : "search-input pr-2"}
                placeholder={t("question1")}/>
              <button onClick={handleSearch} className={i18n.language === 'en' ? "button search-btn " : "button search-btn rtl"}>
                {t("search")}
              </button>
              </div>
              {!categoryAvailable && showList && ( // Hide the message when the list is not shown
                <p className="category-not-available">{t("thisCategoryIsNotAvailible")}</p>
              )}
              <div className="search-select-box">
              {showList && (
                <div className="">
                {filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className=""
                    onClick={() => handleCategorySelect(category.name)}
                  >
                    
                    
                      
                        <p className='search-select'>{category.name}</p>
                     
                    
                  </div>
                ))}
                
              </div>
              )}
              </div>

            </div>
          
          
        </div>
        <div className="row">
        <div className="">
       
              </div>
              </div>
              </div>
      </div>
     
     
  <div className=" container our-section rounded">
    <div className="row">
      <div className="col-lg-2 col-sm-6">
      <Link to='/labours/handy-person'>
        <div className="card border-0 ">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output.png" className="card-img-top  mx-auto " alt="..."/>
            <p className="card-title text-center services pt-3 ">{t("handyPerson")}</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-6 ">
      <Link to='/labours/landscaping'>
        <div className="card border-0 ">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (1).png" className="card-img-top  mx-auto " alt="..."/>
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">{t("landscaping")}</p>
          </div>
        </div>
        </Link>
      </div>
      
      <div className="col-lg-2 col-sm-6 ">
      <Link to='/labours/plumbing-services'> 
        <div className="card border-0 ">
        <div className="mx-auto">
          <img src="assets/images/svgviewer-png-output (2).png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
           <p className="card-title text-center services ">{t("plumbing")}</p>
          </div>
        </div>
        </Link>
      </div>
      
      <div className="col-lg-2 col-sm-6 ">
      <Link to='/labours/elctrician'>
        <div className="card border-0 ">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (3).png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">{t("electrician")}</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-6">
      <Link to='/labours/remodeling'>
        <div className="card border-0">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output.png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">{t("remodling")}</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-6">
      <Link to='/labours/roof-work'>
        <div className="card border-0">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (5).png" className="card-img-top  mx-auto" alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">{t("roofing")}</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  </div>
  </div>
  );
  return (<>
      {isLoading ? <LoadingSpinner /> : renderUser} 
  </> );
  }
  export default Search;