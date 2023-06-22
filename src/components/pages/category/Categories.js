import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Categories() {
  const [category, setCategory] = useState([]);

  const url='';


  useEffect(() => {
    axios.get(`${url}`)
      .then(response => {
        setCategory(response?.data?.data?.en);
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
       {category.map(post => (
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <Link to={`/services/${post.name}`} activeClassName="current">
              <img src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${post.image}`} alt={post.image} className="categories rounded mx-auto d-block"/>
              </Link>
            </div>
          </div>
        <div className="card-body cuntent text-center">
        <Link to={`/services/${post.name}`} activeClassName="current" > {post.name}</Link>
        </div>
      </div>      
        ))} 
    </div>
  </div> 
  
  </>);
}

function Categories1() {
    return <>
        <div className="container">
        <div className="col-12">
            <h1 className="cat text-center">Categories</h1>
        </div>
        </div>
        <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
         <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div>    
    <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div>    
    <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div>    
    <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div>    
    <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div>    
    <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div>    
    <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div>    
    <div className="container ">
      <div className="row">
      <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Gutter Services</a>
          </div>
        </div>      
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Roof Repair </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3"> Home Cleaning </a>
          </div>
        </div>
        <div className="col-md-3 mb-3 ">
          <div className="card">
            <div className="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" className="categories rounded mx-auto d-block"/>
            </div>
          </div>
          <div className="card-body cuntent text-center">
            <a href="" className="categories m-3" > Decks & Porches </a>
          </div>
        </div>
      </div>
    </div> 
    
    </>;
  }
  export default Categories;