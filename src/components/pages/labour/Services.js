import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams  } from 'react-router-dom';


  function Labours() {
        const [labour, setLabour] = useState([]);
        const [category, setCategory] = useState([]);
        const {type} = useParams();
        console.log(type, 'type');
        const [state, setState] = useState({
            user_id: "",
            category_id: ""
        });       
        
        const category_url='';
        useEffect(() => {
            axios.get(`${category_url}`).then(response => {
            setCategory(response?.data?.data?.en);
            loadEmployees();
            }).catch(error => {
            console.error(error);
          });
          
       }, []);

    function loadEmployees(){
        console.log(type, 'typedd');
        const formData = new FormData()
        formData.append('user_id', '')
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

    return (<>
        <div className="container top-btns pt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="category-tabs d-flex justify-content-left">
                        <Link to="/labours" className={`btn tab-btn2 ${!type ? "active" : ""}`} role="button">All</Link>
                        {category.map(post => (
                        <Link to={`/labours/${post.slug}`} className={`btn plum tab-btn2 ${(type===post.slug) ? "active" : ""}`}
                        role="button" onClick={loadEmployees} >{post.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container pt-4">
            <div className="row">
            {labour.map(post => (
                <div className="col-md-6 mt-4">
                    <div className="profile-card d-flex">
                        <img src={`${process.env.REACT_APP_RESOURCES_URL}images/${post.image}`} className="card-img-top rounded-circle" alt="User 1"/>
                        <div className="profile-card-body">
                            <h5 className="card-title plum s">{post.category_name}</h5>
                            <div className="name d-flex">
                                <p className="name-para"><i className="bi mr-2 bi-person-fill fas fa-user"></i>{post.username}</p>
                                <p><i className="bi mr-2 bi-geo-alt-fill fas fa-location-arrow"></i>Pakistan</p>
                            </div>
                            <div className="available d-flex">
                                <Link className="" to="">Available</Link>
                                <Link to={`/info/${post.username}`} className="btn profile-btn">View Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>);
 }
 export default Labours;