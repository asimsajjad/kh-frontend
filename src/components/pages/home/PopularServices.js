import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../config/axios';

function PopularServices() {
  return <section className="container-fluid services">
    <div className='container'>
    <div className="col-md-6 mb-5">
          <h2 className="mb-3 categories">Popular Services </h2>
        </div>
    </div>
  <div className="container mx-auto slid">
      <div className="row slider" >
          <div className="col-md-2 mb-3">
              <div className="carousel-card text-center">
                  <img className="img-fluid mx-auto rounded mx-auto d-block"
                      src="assets/images/svgviewer-png-output (1).png" alt="" />
                  <div className="card-body">
                      <p>Landscaping</p>
                  </div>
              </div>
          </div>
          <div className="col-md-2">
              <div className="carousel-card text-center">
                  <img className="img-fluid mx-auto rounded mx-auto d-block" src="assets/images/totay.png" alt="" />
                  <div className="card-body">
                      <p>Plumber</p>
                  </div>
              </div>
          </div>
          <div className="col-md-2 mb-3">
              <div className="carousel-card text-center">
                  <img className="img-fluid Electrician-img rounded mx-auto d-block" alt="100%x280"
                      src="assets/images/tv.png" />
                  <div className="card-body">
                      <p className="card-text Electrician">Electrician</p>
                  </div>
              </div>
          </div>
          <div className="col-md-2 mb-3">
              <div className="carousel-card text-center">
                  <img className="img-fluid Cleaner-img rounded mx-auto d-block" alt="100%x280"
                      src="assets/images/boy.png" />
                  <div className="card-body">
                      <p className="Cleaner card-text">Cleaner</p>
                  </div>
              </div>
          </div>
          <div className="col-md-2 mb-3">
              <div className="carousel-card text-center">
                  <img className="img-fluid Cleaner-img rounded mx-auto d-block" alt="100%x280"
                      src="assets/images/boy.png" />
                  <div className="card-body">
                      <p className="Cleaner card-text">Cleaner</p>
                  </div>
              </div>
          </div>
          <div className="col-md-2 mb-3">
              <div className="carousel-card text-center">
                  <img className="img-fluid mx-auto rounded mx-auto d-block"
                      src="assets/images/svgviewer-png-output (1).png" alt="" />
                  <div className="card-body">
                      <p>Landscaping</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section> 
}


export default PopularServices;