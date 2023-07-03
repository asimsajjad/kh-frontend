import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import Alert from '../../Alerts/alert';

function Contact() {

  const [contact, setContact] = useState('');
  const [alert, setAlert] = useState(null);
  const url='contactUs';

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    }, 3000);
  }

  const handleChange = (e) => {
    const value=e.target.value;
    // alert(value);
    setContact({
      ...contact,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        const formData = new FormData()
        formData.append('name',  contact.name,)
        formData.append('email',  contact.email,)
        formData.append('comments',  contact.comments,)
        axios.post(`${url}`, formData)
        .then(response => {
          console.log(response?.data?.data)
        }).then(setContact(
          {name: "",
          email: "", 
          comments: ""})
        ).then(showAlert("Your query has been submitted successfully" , "success"))
        .catch(error => {
        console.error(error);
        });
  };

  function SubmitButton(){
    if (contact.name && contact.email && contact.comments){
      return <button className="btn login-btn" type="submit">Button</button>
    } else {
      return <button className="btn login-btn" type="submit" disabled>Button</button>
    };
  };
    return <section className="login-section pl-3">  
    <div className="container mt-5">
      <div className="row height500">
        <div className="col-md-8 login-form1">
        <Alert alert={alert}/>
          <form onSubmit={handleSubmit}> 
            <h2 className="text-center">Contact Us</h2>
            <div className="name-input mb-4 d-flex mt-3">
              <label for="formGroupExampleInput" className="form-label">Name: </label>
              <input type="text" name="name" placeholder='Enter your name here' className="form-control" id="formGroupExampleInput" value={contact.name} onChange={handleChange}
            />
            </div>
            <div className="password-input d-flex">
              <label for="formGroupExampleInput2" className="form-label ">Email: </label>
              <input type="email" className="form-control"  placeholder='Enter your email here' name="email" id="formGroupExampleInput2" value={contact.email} onChange={handleChange}
          />
            </div>
            <div className="row">
              <div className="col-12 text-left mt-3">
                <label className="text-left comment" for="floatingTextarea2" >What can we help you with?</label>
                 <textarea className="form-control" name="comments" id="floatingTextarea2" value={contact.comments} onChange={handleChange}
            ></textarea>
              </div>              
            </div>
            <SubmitButton/>
             {/* <button className="btn login-btn" type="submit" disabled={!contact.comments} onClick={handleSubmit}>Submit</button> */}
          </form>
        </div>
        <div className="col-md-4 pl-0">
          <div className="login-details">
            <h3 className="text-light ">Welcome Back</h3>
            <p className="text-light mb-5 mt-5">to keep connected with us please Login with your personal info </p>         
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Contact;