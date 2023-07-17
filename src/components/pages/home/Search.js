import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useNavigate  } from 'react-router-dom';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate=useNavigate();
  // const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const url='index';

  const handleSearch = () => {
    const formData = new FormData();
    axios.get(`${url}/${searchQuery}`, formData)
      .then(response => {
        // console.log(response?.data?.data)
        navigate(`/labours/${response?.data?.data[0].slug}`)
       })
      .catch(error => {
        console.error(error);
      });
   
  };

  
  
    return <><div className="container pt-4">
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <div className="input-box">
          <i className="fas fa-search mr-3 "></i>
          <input type="text" 
            onChange={handleSearchChange}  value={searchQuery} className="search-input" placeholder="How can we help?" />
          <button onClick={handleSearch} className="button search-btn">search</button>
        
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
            <p className="card-title text-center services pt-3 ">Handy person</p>
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
            <p className="card-title text-center services ">Landscaping</p>
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
           <p className="card-title text-center services ">Plumbing</p>
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
            <p className="card-title text-center services ">Electrician</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-6">
      <Link to='/labours/remodling'>
        <div className="card border-0">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output.png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Remodeling</p>
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
            <p className="card-title text-center services ">Roofing</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  </div>
  </> ;
  }
  export default Search;