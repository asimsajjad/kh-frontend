import React, { useState, useEffect } from 'react';
import axios from "../config/axios";
import { BrowserRouter as Router,Routes, Route, Link, useParams  } from 'react-router-dom';

function Privacy(){
  const [terms, setTerms] = useState([]);
  const {type} = useParams();
const url='privacyPolicy';

useEffect(() => {
  const formData = new FormData()
    formData.append('user_slug', type)
  axios.get(`${url}`, formData)
    .then(response => {
      setTerms(response?.data?.data?.en);
    })
    .catch(error => {
      console.error(error);
    });
}, []);
  return <>

<div className="container pt-5">
<div className="row justify-content-center">
  {/* <div className="col-lg-10 col-md-8 col-sm-6 text-black py-5"> */}
      <h2><strong>Terms and Conditions</strong></h2>
      {terms.map(policy=>(
<div>{policy.terms}</div>
  ))}
</div>
</div>
{/* </div> */}
</>

}

export default Privacy;

