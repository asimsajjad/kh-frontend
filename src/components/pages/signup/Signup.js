import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams, Redirect, useNavigate    } from 'react-router-dom';
import Alert from '../../Alerts/alert';


function Signup() {
    const [user, setUser]=useState('');
    const [category, setCategory] = useState([]);
    const [alert, setAlert] = useState(null);
    const [selected, setSelected] = useState('yes');
    const [formErrors, setFormErrors] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const url='createUser';
    const navigate = useNavigate();


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
      //console.log(value);
      setUser({
        ...user,
        [e.target.name]: value
      });
    };

    const handleSelect = (e) => {
      const value=e.target.value;
      setUser({
        ...user,
        [e.target.name]: value
      });
      setSelected(e.target.value);
    };

    const handleCategoryId = (e) => {
      const value=e.target.value;
      // alert(value);
      setCategory({
        ...category,
        [e.target.name]: value
      });
    };

    const handleImageUpload = (e) => {
      console.log(e.target.files)
    setSelectedImage(e.target.files[0]);
    };

    const category_url='';
        useEffect(() => {
            axios.get(`${category_url}`).then(response => {
            setCategory(response?.data?.data?.en);
            }).catch(error => {
            console.error(error);
          });
          
       }, []
       );

    const handleSubmit = (e) => {
      e.preventDefault();
          const formData = new FormData()
          const config = {
            headers: { 'content-type': 'multipart/form-data' }
           }
          formData.append('username',  user.username,)
          formData.append('email',  user.email,)
          formData.append('password',  user.password,)
          formData.append('user_type',  user.usertype,)
          formData.append('phone_no',  user.phone_no,)
          formData.append('address',  user.address,)
          formData.append('category_id',  user.category,)
          formData.append('image',  selectedImage)

          axios.post(`${url}`, formData, config)
          .then(response => {
            if(response?.data?.message?.success){
              sessionStorage.setItem('user', response?.data?.data[0].user_id)
              sessionStorage.setItem("data", JSON.stringify(response?.data?.data[0]));

              if(response?.data?.data[0].usertype=='employee'){
                navigate('/categories');
              }else{                
                navigate('/labours');
              }

            }
            
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
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const error = {};
        if(regex.test(user.email)){
          return <button className="btn login-btn" type="submit" onClick={handleSubmit} >Sign Up</button>
        }else{
          //error.email="Email is not valid";
          return <button className="btn login-btn" type="submit" onClick={handleSubmit} disabled >Sign Up</button>

        }
      } else {
        return <button className="btn login-btn"  onClick={handleSubmit} type="submit" disabled>Sign Up</button>
      };
    };  
    return <section className="login-section pl-3">    
    <div className="container mt-5">
      <div className="row login-form ">
        <div className="col-md-8">
        <Alert alert={alert}/>
          <form action="" >
            <h2 className="text-center pt-4">Create Account</h2>
            {/* <div className="social-media-links d-flex justify-content-center pt-3">
            <Link to=""><i className="fa-brands fa-facebook"></i></Link>
              <Link href=""><i className="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i className="fa-brands fa-google-plus"></i></Link>
            </div>
            <p className="text-center">Or use your email for registeration</p> */}
            <div className="container pt-3">
              <div className="row justify-content-center">
                <div className="col-auto">
                <input className="form-check-input m-4" type="radio" name="usertype" id="radio2" value="employer" defaultChecked={true} onChange={handleChange} />
                  <div className="form-check form-check-inline pr-5">
                    <div className="row .redio-buttons-image">
                      <a><img src="assets/images/employee.png" alt="" className=" labour"/></a>
                      <label>Employer</label>
                    </div>
                </div>
                    <input className="form-check-input m-4" type="radio" name="usertype" id="radio1" value="employee" onChange={handleChange}/>
                    <div className="form-check form-check-inline">
                      <div className="row .redio-buttons-image">
                        <a><img src="assets/images/labour.png" alt="" className=" labour"/></a>
                        <label>Labour</label>
                      </div>
                    </div>                  
            </div>
          </div>
        </div>
        <div className="name-input mb-4 d-flex">
          <label><i className="fas fa-user"></i></label>
          <input className="" type="name" name='username' placeholder="Name" value={user.username} onChange={handleChange}/>
        </div>
        <div className="name-input mb-4 d-flex">
          <label><i className="far fa-envelope"></i></label>
          <input className="" type="email" name='email' placeholder="Email" value={user.email} onChange={handleChange}/>    
        </div>
        <div className="password-input mb-4 d-flex">
          <label><i className="fas fa-lock	"></i></label>
          <input className="password-input" type="password" name="password" id="" placeholder="Password" value={user.password} onChange={handleChange}/>
        </div>
        <div className="name-input mb-4 d-flex">
          <label><i className="fas fa-phone"></i></label>
          <input className="" type="number" name='phone_no' placeholder="Phone number" value={user.phone_no} onChange={handleChange}/>
        </div>
          
            {(() => {
        if (user.usertype !== "employer") {
          return (
            <div className="form-group">
            <div className="col-md-8 mb-4">
            <select id="signup-sector" name="category" className="signup-select" onChange={handleChange}> 
            {category.map(categories => ( <option key={categories.id} value={categories.id} >{categories.name}</option>))}
            </select>
            </div>
          </div>
          )
        } 
      })()}
           <div className="row mb-4">
              <div className="text-left">
                 <textarea className="form-control" name="address" id="floatingTextarea2" 
                 value={user.address} onChange={handleChange} placeholder='Write your address here'></textarea>
              </div>              
            </div>
           <div className="name-input d-flex">
              <label><i className="fas fa-user"></i></label>
              {/* <input className="pt10" type="file" name='image' placeholder="Upload image" value={user.image} onChange={handleChange}/> */}
              <input className="pt10" type="file" name='file' placeholder="Upload image" value={user.files} onChange={handleImageUpload}/>
            </div>
            <div className="row pt10">
              <div className="col-6 text-left">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label>Remember me</label>
              </div>
            </div>
            
            <SubmitButton/>
          </form>
        </div>
        <Link className="text-center mb-3 mobile-screen d-none" to="/login">Already have an Accountt<i
            className="ml-3 bi bi-arrow-right"></i></Link>
        <div className="col-md-4 pr-0">
          <div className="details">
            <h3 className="text-light">Welcome</h3>
            <p className="text-light mb-5">To keep connected with us please sign-up with your personal informations </p>
            <Link className="text-light" to="/login">Already have an Account<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  export default Signup;