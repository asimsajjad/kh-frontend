import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function Categories() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCategories, setTotalCategories] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const recordsPerPage = 20;
  const url = 'index';

  useEffect(() => {
    document.title = 'Khadim Hazir | Categories';
    fetchData(currentPage); // Fetch data for the initial page
  }, [currentPage]);

  async function fetchData(pageNumber) {
    try {
      setIsLoading(true);
      const storedLanguage = Cookies.get('language') || 'en';
      const formData = new FormData();
      formData.append('recordsPerPage', recordsPerPage);
      formData.append('page', pageNumber);
      const response = await axios.post(`${url}`, formData);
      let data = [];
      if (storedLanguage === 'en') {
        data = response?.data?.data?.en;
        setTotalCategories(response?.data?.data?.en[0].totalCategories);
      } else if (storedLanguage === 'ur') {
        data = response?.data?.data?.ur;
      } else if (storedLanguage === 'ar') {
        data = response?.data?.data?.ar;
      }

      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }
// console.log(categories);
  // const records = categories.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
  const totalPages = Math.ceil(totalCategories / recordsPerPage);

  function changePage(pageNumber) {
    fetchData(pageNumber);
    if (pageNumber < 1 || pageNumber > totalPages) {
      return; // Prevent navigating to invalid pages
    }
    setCurrentPage(pageNumber);
  }
  const renderUser = (
    <div>
      <div className="container mt-5">
        <div className="col-md-12">
          <h1 className="cat text-center">{t("categories")}</h1>
        </div>
      </div>
      <div className="container pt-3">
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-3 mb-3" key={category.id}>
              <Link to={`/labours/${category.slug}`} activeclasscame="current">
                <div className="card">
                  <div className="card-body categories">
                    <img
                      src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`}
                      alt={category.image}
                      className="categories rounded mx-auto d-block"
                    />
                  </div>
                </div>
                <div className="card-body cuntent text-center">
                  <p className={`category m-3`}>{category.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {(() => {
        if(totalPages>1){
          return(
      <ul className='pagination' style={{ justifyContent: 'center' }}>
        <li className='page-item'>
          <button className="page-link" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <li className={`page-item ${currentPage === pageNumber ? 'active' : ''}`} key={pageNumber}>
            <button className="page-link" onClick={() => changePage(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
        <li className='page-item'>
          <button className="page-link" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </li>
      </ul>
          )
      }
      })()}
    </div>
  );
  
  return (<>
    {isLoading ? <LoadingSpinner /> : renderUser}
  </>);
}
export default Categories;