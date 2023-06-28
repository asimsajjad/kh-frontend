import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams  } from 'react-router-dom';

function Info() {
    const [profile, setProfile] = useState([]);
    const {type} = useParams();
    const url='profileData';

    useEffect(() => {
    const formData = new FormData()
    formData.append('user_slug', type)
    axios.post(`${url}`, formData)
     .then(response => {
    setProfile(response?.data?.data);
    })
    .catch(error => {
    console.error(error);
    });
   }, []
   );


    return <div className="container pt-5">
        {profile.map(info => (
    <div className="row pl-2">
        <div className="col-lg-3">
            <img src="assets/images/Rectangle 54.png" alt="" className="img-fluid profile" />
        </div>
        <div className="col-lg-3 ">
            <p className="p1">{info.username}</p>
            <p className="p2">{info.category_name}</p>
            <div className="col-lg-6 pt-5">
                <button type="button" className="btn btn-success">Call Now</button>
            </div>
        </div>
        <div className="col-lg-1 pt-3">
            <div className="row">
            <div className="col-lg-6">
            <i className="fa fa-map-marker " aria-hidden="true"></i>
        </div>
        <div className="col-lg-6">
        <p >Pakistan</p>
        </div>
           
         
            </div>
        
        </div>

    </div>
     ))}
    <div className="col-12 pt-5">
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
    </div>
    <div className="col-md-12 pt-5">
        <h1>About</h1>
    </div>
    <div className="col-md-12 pt-5">
        <div className="row">
            <div className="col-md-3">
                <p className="p4">Phone:</p>
            </div>
            <div className="col-md-3">
                <p className="p4">+ 13203173560 </p>
            </div>
        </div>

    </div>
    <div className="col">
        <div className="row pt-3">
            <div className="col-md-3 ">
                <p className="p4">Address:</p>
            </div>
            <div className="col-md-9">
                <p className="p4">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/5311 (KHTML, like Gecko)
                    Chrome/36.0.814.0 Mobile Safari/5311 </p>
            </div>
        </div>

    </div>
    <div className="col">
        <div className="row pt-3">
            <div className="col-md-3">
                <p className="p4">Email:</p>
            </div>
            <div className="col-md-3">
                <p className="p4">mailto:jagew46732@andorem.com</p>
            </div>
        </div>

    </div>
    <div className="col">
        <div className="row pt-3">
            <div className="col-md-3">
                <p className="p4">Birthday:</p>
            </div>
            <div className="col-md-3">
                <p className="p4">June, 25, 1992 </p>
            </div>
        </div>

    </div>

</div>
}
export default Info;