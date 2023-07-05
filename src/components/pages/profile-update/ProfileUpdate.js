import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Alert from '../../Alerts/alert';


function ProfileUpdate() {
    const [profile, setProfile]=useState([]);
    const [profileupdate, setProfileUpdate]=useState('');
    const [category, setCategory] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const profile_url='profileData';
    const update_url='updateProfile';

    const handleChange = (e) => {
      const value=e.target.value;
      //console.log(value);
      setProfile({
        ...profile,
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
            loadProfile();
            }).catch(error => {
            console.error(error);
          });
          
       }, []
       );

   function loadProfile(){
    const formData = new FormData()
    formData.append('user_slug', 'zain')
    // formData.append('category_slug', )
    axios.post(`${profile_url}`, formData)
     .then(response => {
    setProfile(response?.data?.data);
    })
    .catch(error => {
    console.error(error);
    });
}
    const handleSubmit = (e) => {
      e.preventDefault();
          const formData = new FormData()
          const config = {
            headers: { 'content-type': 'multipart/form-data' }
           }
           formData.append('user_id', '200',)
          formData.append('username',  profile.username,)
          formData.append('phone_no',  profile.phone_no,)
          formData.append('address',  profile.address,)
          formData.append('category_id',  profile.category,)
          formData.append('image',  selectedImage)

          axios.post(`${update_url}`, formData, config)
          .catch(error => {
          console.error(error);
          });

    };
  
    function SubmitButton(){
      // if (profile.username){
        return <button className="btn login-btn" type="submit" onClick={handleSubmit} >Update</button>  
      // } 
      // else {
        // return <button className="btn login-btn"  onClick={handleSubmit} type="submit" disabled>Update</button>
      // };
    };  
    return <div>
     
    <section className="login-section pl-3"> 
    {profile.map(info => (   
    <div className="container mt-5">
      <div className="row login-form ">
        <div className="col-md-8">
          <form action="" >
            <h2 className="text-center pt-4">Profile Update</h2>
            {/* <div className="social-media-links d-flex justify-content-center pt-3">
            <Link to=""><i className="fa-brands fa-facebook"></i></Link>
              <Link href=""><i className="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i className="fa-brands fa-google-plus"></i></Link>
            </div>
            <p className="text-center">Or use your email for registeration</p> */}
        <div className="name-input mb-4 d-flex">
          <label><i className="fas fa-user"></i></label>
          <input className="" type="name" name='username' placeholder="Name" value={info.username} onChange={handleChange}/>
        </div>
        <div className="name-input mb-4 d-flex">
          <label><i className="fas fa-phone"></i></label>
          <input className="" type="number" name='phone_no' placeholder="Phone number" value={info.phone_no} onChange={handleChange}/>
        </div>
          
            {(() => {
        if (info.user_type !== "employer") {
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
                 value={info.address} onChange={handleChange} placeholder='Write your address here'>{info.address}</textarea>
              </div>              
            </div>
           <div className="name-input d-flex">
           
           <img src={`${process.env.REACT_APP_RESOURCES_URL}images/${info.image}`} alt="" className="img-fluid profile" />
       
              {/* <input className="pt10" type="file" name='image' placeholder="Upload image" value={user.image} onChange={handleChange}/> */}
              <input className="pt10" type="file" name='file' placeholder="Upload image" value={info.files} onChange={handleImageUpload}/>
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
    ))}
  </section>;
  
  </div>
  }
  export default ProfileUpdate;