import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);
  const url='';
  useEffect(() => {
    axios.get(`${url}`)
      .then(response => {
        setCategories(response?.data?.data?.en);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (<>
    <div className="container">
      <div className="col-12">
          <h1 className="cat text-center">Categories</h1>
      </div>
      </div>
      <div className="container ">
      <div className="row">
       {categories.map(category => (
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <Link to={`/labours/${category.name}`} activeClassName="current">
              <img src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`} alt={category.image} className="categories rounded mx-auto d-block"/>
              </Link>
            </div>
          </div>
        <div className="card-body cuntent text-center">
        <Link to={`/labours/${category.name}`} className="categories m-3"> {category.name}</Link>
        </div>
      </div>      
        ))} 
    </div>
  </div> 
  
  </>);
}
  export default Categories;