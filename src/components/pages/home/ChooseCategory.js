import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ChooseCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/khadim-hazir/api/sevenCategories')
      .then(response => {
        setPosts(response.data.data.en);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
console.log(posts, process.env.API_BASE_URL);
  return (<>
    <div class="container mb-5">
      <h1 class="Category">Choose Different <span style={{color: "#673AB7"}}> Category</span> </h1>
    </div>
    <div class="container"> 
    <div class="row">
    {posts.map(post => (
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
            <img src="http://localhost/khadim-hazir/uploads/category/11.png" alt="" class="categories rounded mx-auto d-block" />            
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> {post.name}</a>
        </div>
      </div> 
      ))}
      </div>
    </div>
    </>
  );
}

function ChooseCategory1() {
  // const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("http://localhost/khadim-hazir/api/employerList")
  //     .then((response) => console.log(response.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);
  return <>
    <div class="container mb-5">
    <h1 class="Category">Choose Different <span style={{color: "#673AB7"}}> Category</span> </h1>
  </div>
  <div class="container ">
    <div class="row">
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div className="card-body categories">
            <img src="assets/images/Appliance Repair.png" alt="" class="categories rounded mx-auto d-block" />
            <div class="row">
            </div>
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> Appliance Repair </a>
        </div>
      </div>
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
            <img src="assets/images/Fence Repair.png" alt="" class="categories rounded mx-auto d-block" />
            <div class="row">
            </div>
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> Fence Repair </a>
        </div>
      </div>
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
            <img src="assets/images/Plumbing Services.png" alt="" class="categories rounded mx-auto d-block" />
            <div class="row">
            </div>
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> Plumbing Services</a>
        </div>
      </div>
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
            <img src="assets/images/Pest Control.png" alt="" class="categories rounded mx-auto d-block" />
            <div class="row">
            </div>
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> Pest Control</a>
        </div>
      </div>
    </div>
  </div>
  <div class="container pt-1 ">
    <div class="row">
    <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
          <img src="assets/images/Gutter Services.png" alt="" class="categories rounded mx-auto d-block" />
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3">  Gutter Services </a>
        </div>
      </div>
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
            <img src="assets/images/Roof Repair.png" alt="" class="categories rounded mx-auto d-block" />
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> Roof Repair </a>
        </div>
      </div>
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
            <img src="assets/images/Home Cleaning.png" alt="" class="categories rounded mx-auto d-block" />
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> Home Cleaning </a>
        </div>
      </div>
      <div class="col-md-3 mb-3 ">
        <div class="card">
          <div class="card-body categories">
            <img src="assets/images/Decks & Porches.png" alt="" class="categories rounded mx-auto d-block" />
          </div>
        </div>
        <div class="card-body cuntent text-center">
          <a href="#" class="categories m-3"> Decks & Porches</a>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="col-md-12  text-center text-center">
      <button class="btn Categoryies-btn align-self-center " href="services.html">More Categories</button>
    </div>
  </div>    
    </>;

};




  export default ChooseCategory;