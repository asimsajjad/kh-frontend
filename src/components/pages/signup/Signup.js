import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams  } from 'react-router-dom';
import Alert from '../../Alerts/alert';

function Signup() {
    const [user, setUser]=useState('');
    const [alert, setAlert] = useState(null);
    const url='createUser';

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
      setUser({
        ...user,
        [e.target.name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
          const formData = new FormData()
          formData.append('username',  user.username,)
          formData.append('email',  user.email,)
          formData.append('password',  user.password,)
          formData.append('user_type',  user.employer,)
          formData.append('phone_no',  user.phone_no,)
          formData.append('address',  user.address,)
          formData.append('image',  user.image,)
          axios.post(`${url}`, formData)
          .then(response => {
            console.log(response?.data?.data)
          }).then(setUser(
            {username: "",
            email: "", 
            password: "",
            phone_no: "",
            address: "",
            image: "",})
          ).then(showAlert("Sign up Successful" , "success"))
          .catch(error => {
          console.error(error);
          });
    };
  
    function SubmitButton(){
      if (user.username && user.email && user.password){
        return <button className="btn login-btn" type="submit" onClick={handleSubmit}>Sign-up</button>
      } else {
        return <button className="btn login-btn"  onClick={handleSubmit} type="submit" disabled>Sign-up</button>
      };
    };
  
    return <section className="login-section pl-2">    
    <div className="container">
      <div className="row login-form ">
        <div className="col-md-8">
          <form action="">
            <h2 className="text-center pt-4">Create Account</h2>
            <div className="social-media-links d-flex justify-content-center pt-3">
              <Link to=""><i class="fa-brands fa-facebook"></i></Link>
              <Link href=""><i class="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i class="fa-brands fa-google-plus"></i></Link>
            </div>
            <Link href=""><img src="assets/images/images (5).jpg" alt="" class="profile"/></Link>
            
            <div class="container pt-3">
              
    <div class="row justify-content-center">
      <div class="col-auto">
      
        <div class="form-check form-check-inline pl-5">
          <input class="form-check-input m-4  " type="radio" name="radio-group" id="radio1" value="option1"/>
          <div class="row .redio-buttons-image">
          <Link href=""><img src="assets/images/labour.png" alt="" class=" labour"/></Link>
          <label class="form-check-label" for="radio1"> Labour </label>
          </div>
        </div>
        
        <div class="form-check form-check-inline pr-5">
        
          <input class="form-check-input m-4" type="radio" name="radio-group" id="radio2" value="option2"/>
          <div class="row .redio-buttons-image">
          <Link href=""><img src="assets/images/employee.png" alt="" class=" labour"/></Link>
          <label class="form-check-label" for="radio2">Employer</label>
          </div>
          
        </div>
    
    </div>
    </div>
  </div>
            <p className="text-center pt-3">or use your email for register</p>
            
            <div className="name-input mb-4 d-flex">
              <label for=""><i className="fas fa-user"></i></label>
              <input className="" type="name" name='username' placeholder="Name" value={user.username} onChange={handleChange}/>
            </div>
            <div className="name-input mb-4 d-flex">
              <label for=""><i className="far fa-envelope"></i></label>
              <input className="" type="email" name='email' placeholder="Email" value={user.email} onChange={handleChange}/>
            </div>
            <div className="name-input mb-4 d-flex">
              <label for=""><i className="fas fa-phone"></i></label>
              <input className="" type="number" name='phone_no' placeholder="Phone number" value={user.phone_no} onChange={handleChange}/>
            </div>
            <div className="row">
              <div className="text-left mb-4">
                <label className="text-left comment" for="floatingTextarea2">Write your address here</label>
                 <textarea className="form-control" name="address" id="floatingTextarea2" value={user.address} onChange={handleChange}
            ></textarea>
              </div>              
            </div>
            <div className="password-input d-flex">
              <label for=""><i className="fas fa-lock	"></i></label>
              <input className="password-input" type="password" name="password" id="" placeholder="Password" value={user.password} onChange={handleChange}/>
            </div>
            <div class="form-group">
            <div className="col-md-8">
            <select id="signup-sector" name="signup-sector" class="signup-select">
                        <option value="sector">Sector</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                    </div>
          </div>
            <div className="row">
              <div className="col-6 text-left mt-2">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1">Remember me</label>
              </div>
            </div>
            <SubmitButton/>
          </form>
        </div>
        <Link className="text-center mb-3 mobile-screen d-none" href="">Already have an Account<i
            className="ml-3 bi bi-arrow-right"></i></Link>
        <div className="col-md-4 pr-0">
          <div className="details">
            <h3 className="text-light">Welcome</h3>
            <p className="text-light mb-5">to keep connected with us please sign-up with your personal info </p>
            <Link className="text-light" to="/login">already have an Account<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Signup;