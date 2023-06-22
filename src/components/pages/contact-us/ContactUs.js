import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';

function Contact() {

  const [state, setState] = useState({
    email:"",
    name: "",
    comments:""
  });

  const url='contactUs';
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: state.email,
      name: state.name, 
      comments:state.comments
    };
    // setState('');
    axios
      .post(`${url}` , userData)
      .then((response) => {
        setState(response.data.data);
      });
  };

   const handleChange = (e) => {
    const value=e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

    return <section className="login-section pl-3">
    <div className="container mt-5">
      <div className="row height500">
        <div className="col-md-8 login-form1">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Contact Us</h2>
            <div className="name-input mb-4 d-flex">
              <label for="formGroupExampleInput" className="form-label">Name</label>
              <input type="text" name="name" className="form-control" id="formGroupExampleInput" value={state.name} onChange={handleChange}
            />
            </div>
            <div className="password-input d-flex">
              <label for="formGroupExampleInput2" className="form-label ">Email</label>
              <input type="email" className="form-control" name="email" id="formGroupExampleInput2" value={state.email} onChange={handleChange}
          />
            </div>
            <div className="row">
              <div className="col-12 text-left mt-3">
                <label className="text-left comment" for="floatingTextarea2">What can we help you with?</label>
                 <textarea className="form-control" name="comments" id="floatingTextarea2" value={state.comments} onChange={handleChange}
            ></textarea>
              </div>              
            </div>
             <button className="btn login-btn">Submit</button>
          </form>
        </div>
        <div className="col-md-4 pl-0">
          <div className="login-details">
            <h3 className="text-light ">Welcome Back</h3>
            <p className="text-light mb-5 mt-5">to keep connected with us please
Login with your personal info </p>
                      
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Contact;