import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams  } from 'react-router-dom';
import LoadingSpinner from "../../loader/LoadingSpinner";

function Info() {
    const [profile, setProfile] = useState([]);
    const {type} = useParams();
    const user_id = localStorage.getItem('user_id')
    const url='profileData';
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const formData = new FormData()
        formData.append('user_slug', type)
        axios.post(`${url}`, formData)
        .then(response => {
        setProfile(response?.data?.data);
        setIsLoading(false);
        })
        .catch(error => {
        console.error(error);
        setIsLoading(false);
        });
    }, []);
   const [isActive, setIsActive] = useState(false);
   const [description, setDescription] = useState(false);

   const handleClick = event => {
     setIsActive(current => !current);
     setDescription(true);

    };
    const handleButton = event => {
        setIsActive(current => !current);
        setDescription(false);
       };

       const renderUser=(
           <div>
           {profile.map(info => (
        <div className="container pt-5 profile">
                    <div className="row pl-2">
                        <div className="col-lg-3 p-5">
                        <img src={info.image ? `${process.env.REACT_APP_RESOURCES_URL}images/${info.image}` : `${process.env.REACT_APP_BASE_URL}assets/images/manager.png`} className="img-fluid profile" />
                        <div className="col-lg-2 pt-5">
                        </div>
                        </div>
                        <div className="col-lg-5 pt-3">
                        <div className="col-md-12 ">
                                 <h1>About</h1>
                         <div className="row pt-3">
                         <div className="col-md-4 ">
                          <p className="p1">{info.username}</p>
                        </div>
            <div className="col-md-8 ">
            <p className='p1'> <img src={`${process.env.REACT_APP_BASE_URL}assets/images/location.png`} className='location_icon '></img>Pakistan</p> 
            </div>
            </div>
                            <p className="p2">{info.category_name}</p>
                            {(() => {
                                if (user_id == info.user_id){
                                    return (<p></p>)
                                }else{
                                    return (
                                    <div className="col-lg-6">
                                    <button type="button" className={isActive ? 'btn btn-success-hide' : 'btn btn-success'} style={isActive ? {display : 'none'} : {display : 'block'}}  onClick={handleClick}>Call Now</button>
                                    {description && (<button type="button" style={{background:'none', border:'none'}} onClick={handleButton}><p><b>{info.phone_no}</b></p></button>)}
                                    </div>)}  
                                                
                            })()}
        </div>
        <div className="col">
            <div className="row pt-3">
                <div className="col-md-3 ">
                    <p className="p4">Address:</p>
                </div>
                <div className="col-md-9">
                    <p className="p4">{info.address}</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="row ">
                <div className="col-md-3">
                    <p className="p4">Email:</p>
                </div>
                <div className="col-md-3 ml-5">
                    <p className="p4">{info.email}</p>
                </div>
            </div>
        </div>
                        <div className="row">
                <div className="col-md-3">
                    <p className="p4">Phone:</p>
                </div>
                <div className="col-md-3 ml-5">
                    <p className="p4">{info.phone_no}</p>
                </div>
            </div>
                       </div>  
                    <div className="col-lg-4 profile-text  pt-5 text-center text-white">
                       <h3>Welcome to khadim hazir</h3> 
                    </div>
                </div> 
        {/* <div className="col-12 pt-5">
            <h1>Description</h1>
        </div>
        <div className="col-12 pt-5">
            <p className="p3">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
                a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ClassNclassName aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
                enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
                elementum tellus.
            </p>
        </div> */}
        
     
        
    </div>
     ))}
     </div>);

    return <div>
{isLoading ? <LoadingSpinner /> : renderUser}
 </div>
}
export default Info;