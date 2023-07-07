import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom';
import Alert from '../../Alerts/alert';


function ProfileUpdate() {
  // const UserIDString = sessionStorage.getItem('data');
  // const data = JSON.parse(UserIDString);
  // console.log(data.user_id, 'update frofile');
    const [profile, setProfile]=useState([]);
    const [profileupdate, setProfileUpdate]=useState();
    const [category, setCategory] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const profile_url='profileData';
    const update_url='updateProfile';

    // const handleChange = (e) => {
    //   const value=e.target.value;
    //   //console.log(value);
    //   setProfile({
    //     ...profile,
    //     [e.target.name]: value
    //   });
    // };

    

    const handleImageUpload = (e) => {
      // console.log(e.target.files)
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
    const user_id = localStorage.getItem('user_id')
    formData.append('user_id', user_id)
    // if(data.user_type === 'employer'){
      // formData.append('category_id', '0',)
    // }
    
    // formData.append('category_slug', )
    axios.post(`${profile_url}`, formData)
     .then(response => {
    setProfile(response?.data?.data);
    })
    .catch(error => {
    console.error(error);
    });
}
const handleEdit = (index, field, value) => {
  const newItems = [...profile];
  newItems[index][field] = value;
  setProfileUpdate(newItems);
  
};
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(profileupdate);
          const formData = new FormData()
          const config = {
            headers: { 'content-type': 'multipart/form-data' }
           }
           formData.append('user_id', '204',)
          //  formData.append('category_slug', '0',)
          formData.append('username',  profileupdate[0].username,)
          formData.append('phone_no',  profileupdate[0].phone_no,)
          formData.append('address',  profileupdate[0].address,)
          formData.append('category_id',  profileupdate[0].category_id,)
          formData.append('image',  selectedImage)

          axios.post(`${update_url}`, formData, config)
          .then(response =>{
            navigate(`/profile/${profileupdate[0].user_slug}`);
          })
          .catch(error => {
          console.error(error);
          });

    };

   
  
    function SubmitButton(){
      // if (profile.username){
        return <button className="btn login-btn" type="submit">Update</button>  
      // } 
      // else {
        // return <button className="btn login-btn"  onClick={handleSubmit} type="submit" disabled>Update</button>
      // };
    };  
    return <div>
     
    <section className="login-section pl-3"> 
    {profile.map((info, index) => (   
    <div className="container mt-5">
      <div className="row login-form ">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}  >
            <h2 className="text-center pt-4">Profile Update</h2>
            {/* <div className="social-media-links d-flex justify-content-center pt-3">
            <Link to=""><i className="fa-brands fa-facebook"></i></Link>
              <Link href=""><i className="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i className="fa-brands fa-google-plus"></i></Link>
            </div>
            <p className="text-center">Or use your email for registeration</p> */}
        <div className="name-input mb-4 d-flex">
          <label><i className="fas fa-user"></i></label>
          <input className="" type="name" name='username' placeholder="Name" value={info.username} onChange={(event) => handleEdit(index, 'username', event.target.value)}/>
        </div>
        <div className="name-input mb-4 d-flex">
          <label><i className="fas fa-phone"></i></label>
          <input className="" type="number" name='phone_no' placeholder="Phone number" value={info.phone_no} onChange={(event) => handleEdit(index, 'phone_no', event.target.value)}/>
        </div>
          
            {(() => {
        if (info.user_type !== "employer") {
          return (
            <div className="form-group">
            <div className="col-md-8 mb-4">
            <select id="signup-sector" name="category" className="signup-select" onChange={(event) => handleEdit(index, 'category_id', event.target.value)}> 
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
                 value={info.address} onChange={(event) => handleEdit(index, 'address', event.target.value)} placeholder='Write your address here'></textarea>
              </div>              
            </div>
           <div className="name-input d-flex">
           
           <img src={`${process.env.REACT_APP_RESOURCES_URL}images/${info.image}`} alt="" className="img-fluid update" />
       
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
            <h3 className="text-light">Welcome to Khaidm Hazir</h3>
            <p className="text-light">If you do not want to do any changes</p>
            <Link className="contact" to={`/profile/${info.user_slug}`}>See your profile here<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
    ))}
  </section>;
  
  </div>
  }
  export default ProfileUpdate;