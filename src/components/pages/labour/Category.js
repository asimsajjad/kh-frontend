import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams  } from 'react-router-dom';
import Slider from "react-slick";

  function Categories() {
        const [labour, setLabour] = useState([]);
        const [category, setCategory] = useState([]);
        const {type} = useParams();

        const [currentPage, setCurrenPage] = useState(1);
        const recordsPerPage= 10;
        const lastIndex = currentPage * recordsPerPage;
        const firstIndex = lastIndex - recordsPerPage;
         
        const user_id = localStorage.getItem('user_id');
        const category_url='';
        useEffect(() => {
            axios.get(`${category_url}`).then(response => {
            setCategory(response?.data?.data?.en);
            loadEmployees();
            }).catch(error => {
            console.error(error);
          }); 
          
       }, []
       );

    function loadEmployees(){
        
        const formData = new FormData()
        formData.append('user_id', user_id)
        formData.append('category_id', '')
        formData.append('category_slug', type)
        const url='employeesListing';
        axios.post(`${url}`, formData)
        
        .then(response => {
        setLabour(response?.data?.data);
        
        })
        .catch(error => {
        console.error(error);
        });
    }
    console.log(labour);
    const records = labour.slice(firstIndex, lastIndex);
    const npage = Math.ceil(labour.length/recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1); 
  
    function prePage(){
      if(currentPage !== 1){
      setCurrenPage(currentPage-1);
      }
      }
      function changeCpage(id){
      setCurrenPage(id);
      }
      function nextPage(){
        if(currentPage === npage){
          setCurrenPage(1);
        }else{
          setCurrenPage(currentPage+1);
        }
      }
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        variableWidth: true

      };
      return (<>
        <div className="container top-btns pt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="category-tabs justify-content-left">
                    <Slider {...settings}>
                        <Link to="/labours" className={`btn tab-btn2 mr-4 ml-4  ${!type ? "active" : ""}`} 
                        onClick={loadEmployees}  role="button">All</Link>
                        
                        {category.map(category_data => (
                        <Link key={category_data.id} to={`/labours/${category_data.slug}`} className={`btn plum tab-btn2 mr-5 ${(type===category_data.slug) ? "active" : ""}`}
                        role="button" onClick={loadEmployees} >{category_data.name}</Link>
                        ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        <div className="container pt-4">
            <div className="row">
            {records.map((labour_data) => (
                <div className="col-md-6 mt-4" key={labour_data.id}>
                    <div className="profile-card d-flex">
                      <img src={labour_data.image ? `${process.env.REACT_APP_RESOURCES_URL}images/${labour_data.image}` : "assets/images/manager.png"} className="card-img-top rounded-circle" />    
                        <div className="profile-card-body">
                            <h5 className="card-title plum s">{labour_data.category_name}</h5>
                            <div className="name d-flex">
                                <p className="name-para"><i className="bi mr-2 bi-person-fill fas fa-user"></i>{labour_data.username}</p>
                                <p><i className="bi mr-2 bi-geo-alt-fill fas fa-location-arrow"></i>Pakistan</p>
                            </div>
                            <div className="available d-flex">
                                <Link className="" to="">Available</Link> 
                                {(() => {
                                  if (user_id == null){
                                    return (
                                    <Link to="/login" className="btn profile-btn">Profile</Link>
                                    )
                                  }else{
                                    return (
                                    <Link to={`/profile/${labour_data.slug}`} className="btn profile-btn">Profile</Link>
                                    )
                                  }              
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div>
        {(() => {
        if (npage>1) {
          return (
        <ul className='pagination' style={{justifyContent: 'center'}}>
      <li className='page-item'>
      <Link to="/labours" className="page-link" onClick={prePage}>Prev</Link>
      </li>
      {
        numbers.map((n, i) =>(
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <Link to="/labours" className="page-link" onClick={()=> changeCpage(n)}>{n}</Link>
          </li>
        ))
      }
       <li className='page-item'>
      <Link to="/labours" className="page-link" onClick={nextPage}>Next</Link>
      </li>
    </ul>
    )
  } 
})()}
</div>
    </>);
 }
 export default Categories;