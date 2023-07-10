import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function ChooseCategory() {
  const [categories, setcategories] = useState([]);
  //const url=process.env.REACT_APP_API_BASE_URL+'api/sevenCategories';
  useEffect(() => {
    const formData = new FormData()
    axios.get('sevenCategories/8', formData,)
      .then(response => {
        setcategories(response?.data?.data?.en);
      }).then(console.log(categories))
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (<>
    <div className="container mb-5">
      <h1 className="Category">Choose a <Link to='/categories'><span style={{color: "#673AB7"}}> Category</span> </Link></h1>
    </div>
    <div className="container"> 
    <div className="row">
    {categories.map(category => (
      <div className="col-md-3 mb-3 ">
        <Link to={`/labours/${category.slug}`}>
        <div className="card">
          <div className="card-body categories">
          
            <img src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`}
             alt={category.image} className="categories rounded mx-auto d-block" />       
          </div>
        </div>
        <div className="card-body cuntent text-center">
          <Link to={`/labours/${category.slug}`} className="categories m-3"> {category.name}</Link>
        </div>
        </Link>
      </div> 

      ))}
      </div>
    </div>
    <div className="container mt-3">
    <div className="col-md-12  text-center text-center">
    <Link to="/categories"><button className="btn Categoryies-btn align-self-center">More Categories</button></Link>
    </div>
  </div> 
    </>
  );
}
export default React.memo(ChooseCategory);