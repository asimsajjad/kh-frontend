import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PopularServices() {
  return <section className="pt-5 pb-5 worker-carousel mb-5">
     <div className="container">
      <div className="row">
        <div className="col-md-6 mb-5">
          <h2 className="mb-3 categories">Popular Services </h2>
        </div>
        <div className="container categories">
          <div className="col-md-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-1 pt-5">
                      <a className="btn carousel-btn-left mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                      </a>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid mx-auto" src="assets/images/svgviewer-png-output (1).png" alt=""/>
                        <div className="card-body">
                        <p>Landscaping</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid mx-auto" src="assets/images/totay.png" alt=""/>
                        <div className="card-body">
                          <p>Plumber</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Electrician-img" alt="100%x280" src="assets/images/tv.png"/>
                        <div className="card-body">
                          <p className="card-text Electrician">Electrician</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Cleaner-img" alt="100%x280" src="assets/images/boy.png"/>
                        <div className="card-body">
                          <p className="Cleaner card-text">Cleaner</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Cleaner-img" alt="100%x280" src="assets/images/boy.png"/>
                        <div className="card-body">
                          <p className="Cleaner card-text">Cleaner</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 pt-5">
                      <a className="btn carousel-btn-right mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-1 pt-5">
                      <a className="btn carousel-btn-left mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                      </a>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid mx-auto" src="assets/images/svgviewer-png-output (1).png" alt=""/>
                        <div className="card-body">
                          <p>Landscaping</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid mx-auto" src="assets/images/totay.png" alt=""/>
                        <div className="card-body">
                          <p>Plumber</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Electrician-img" alt="100%x280" src="assets/images/tv.png"/>
                        <div className="card-body">
                          <p className="card-text Electrician">Electrician</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Cleaner-img" alt="100%x280" src="assets/images/boy.png"/>
                        <div className="card-body">
                          <p className="Cleaner card-text">Cleaner</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Cleaner-img" alt="100%x280" src="assets/images/boy.png"/>
                        <div className="card-body">
                          <p className="Cleaner card-text">Cleaner</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 pt-5">
                      <a className="btn carousel-btn-right mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-1 pt-5">
                      <a className="btn carousel-btn-left mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                      </a>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid mx-auto" src="assets/images/svgviewer-png-output (1).png" alt=""/>
                        <div className="card-body">
                          <p>Landscaping</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid mx-auto" src="assets/images/totay.png" alt=""/>
                        <div className="card-body">
                          <p>Plumber</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Electrician-img" alt="100%x280" src="assets/images/tv.png"/>
                        <div className="card-body">
                          <p className="card-text Electrician">Electrician</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Cleaner-img" alt="100%x280" src="assets/images/boy.png"/>
                        <div className="card-body">
                          <p className="Cleaner card-text">Cleaner</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="carousel-card text-center">
                        <img className="img-fluid Cleaner-img" alt="100%x280" src="assets/images/boy.png"/>
                        <div className="card-body">
                          <p className="Cleaner card-text">Cleaner</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 pt-5">
                      <a className="btn carousel-btn-right mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>; 
}


export default PopularServices;