import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function ChooseCategory() {
  const [posts, setPosts] = useState([]);
  //const url=process.env.REACT_APP_API_BASE_URL+'api/sevenCategories';
  useEffect(() => {
    axios.get('sevenCategories')
      .then(response => {
        console.log("Hello here");
        setPosts(response?.data?.data?.en);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (<>
    <div className="container mb-5">
      <h1 className="Category">Choose Different <span style={{color: "#673AB7"}}> Category</span> </h1>
    </div>
    <div className="container"> 
    <div className="row">
    {posts.map(post => (
      <div className="col-md-3 mb-3 ">
        <div className="card">
          <div className="card-body categories">
            <img src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${post.image}`}
             alt={post.image} className="categories rounded mx-auto d-block" />            
          </div>
        </div>
        <div className="card-body cuntent text-center">
          <Link to={`/services/${post.name}`} className="categories m-3"> {post.name}</Link>
        </div>
      </div> 
      ))}
      </div>
    </div>
    <div className="container">
    <div className="col-md-12  text-center text-center">
    <Link to="/categories"><button className="btn Categoryies-btn align-self-center">More Categories</button></Link>
    </div>
  </div> 
    </>
  );
}
export default React.memo(ChooseCategory);