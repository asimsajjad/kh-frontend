import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../config/axios';
import Slider from "react-slick";

function PopularServices() {
    const [categories, setCategories] = useState([]);

    const url='popularCategories';
    useEffect(() => {
        axios.get(`${url}`).then(response => {
        setCategories(response?.data?.data?.en);
        }).catch(error => {
        console.error(error);
      }); 
      
   }, []
   );
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      }; 
  return <section className="container-fluid services">
    <div className='container'>
    <div className="col-md-6 mb-5">
          <h2 className="mb-3 categories">Popular Services </h2>
        </div>
    </div>
  <div className="container mx-auto slid">
      <div className="row slider" >
      <Slider {...settings}>

      {categories.map(category => (
                        <div className="col-md-2 mb-3">
                            <Link to={`labours/${category.slug}`}>
                                <div className="carousel-card text-center">
                                    <img className="img-fluid mx-auto rounded mx-auto d-block"
                                        src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`} alt={category.slug} />
                                    <div className="card-body">
                                        <p>{category.name}</p>
                                    </div>
                                </div>
                            </Link>
                    </div>
                        ))}

          </Slider>
      </div>
  </div>
</section> 
}


export default PopularServices;