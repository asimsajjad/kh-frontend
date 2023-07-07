import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams  } from 'react-router-dom';

function Search() {
    return <><div className="container pt-4">
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <div className="input-box">
          <i className="fas fa-search mr-3 "></i>
          <input type="text" className="search-input" placeholder="How can we help?" />
          <button className="button search-btn">search</button>
        </div>
      </div>
    </div>
  </div>
  <div className=" container our-section rounded">
    <div className="row">
      <div className="col-lg-2 ">
        <div className="card border-0 ">
          <Link to='/labours/handy-person'>
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output.png" className="card-img-top  mx-auto " alt="..."/>
            <p className="card-title text-center services pt-3 ">Handy person</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-2 ">
        <div className="card border-0 ">
          <Link to='/labours/landscaping'>
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (1).png" className="card-img-top  mx-auto " alt="..."/>
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Landscaping</p>
          </div>
          </Link>
        </div>
      </div>
      
      <div className="col-lg-2 ">
        <div className="card border-0 ">
        <Link to='/labours/plumbing-services'> 
        <div className="mx-auto">
          <img src="assets/images/svgviewer-png-output (2).png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
           <p className="card-title text-center services ">Plumbing</p>
          </div>
          </Link>
        </div>
      </div>
      
      <div className="col-lg-2 ">
        <div className="card border-0 ">
        <Link to='/labours/elctrician'>
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (3).png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Electrician</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="card border-0">
        <Link to='/labours/remodling'>
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output.png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Remodeling</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="card border-0">
        <Link to='/labours/roof-work'>
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (5).png" className="card-img-top  mx-auto" alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Roofing</p>
          </div>
          </Link>
        </div>
        
      </div>
    </div>
  </div>
  </> ;
  }
  export default Search;