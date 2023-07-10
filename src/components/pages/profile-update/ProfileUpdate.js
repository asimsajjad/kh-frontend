import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom';
import Alert from '../../Alerts/alert';


function ProfileUpdate() {
  // const UserIDString = sessionStorage.getItem('data');
  // const data = JSON.parse(UserIDString);
  // console.log(data.user_id, 'update frofile');
    const [profile, setProfile]=useState([]);
    const [profileupdate, setProfileUpdate]=useState(null);
    const [category, setCategory] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const profile_url='profileData';
    const update_url='updateProfile';

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

const handleImageUpload = (e) => {
  const value=e.target.value;
  //console.log(value);
  setProfileUpdate({
    ...profile,
    [e.target.name]: value
  });
  // console.log(e.target.files)
setSelectedImage(e.target.files[0]);
};
// console.log('',profileupdate);
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(profileupdate);
          const formData = new FormData()
          const config = {
            headers: { 'content-type': 'multipart/form-data' }
           }
           formData.append('user_id', profileupdate[0].user_id,)
           if(profileupdate[0].user_type === 'employer'){
            formData.append('category_id', '0',)
          }
          //  formData.append('category_slug', '0',)
          formData.append('username',  profileupdate[0].username,)
          formData.append('phone_no',  profileupdate[0].phone_no,)
          formData.append('address',  profileupdate[0].address,)
          formData.append('category_id',  profileupdate[0].category_id,)
          if(selectedImage){
            formData.append('image',  selectedImage)
            // console.log('this is update image', selectedImage);
          }

          const user=(profileupdate[0].username).replace(/ /g, '-');
          const user_slug=user.toLowerCase();

          // if(profileupdate[0].username === null && profileupdate[0].phone_no === null && profileupdate[0].address === null &&profileupdate[0].category_id === null && !selectedImage){
          //   navigate(`/profile/${user_slug}`);
          // }else{
            axios.post(`${update_url}`, formData, config)
            .then(response =>{
              navigate(`/profile/${user_slug}`);
            })
            .catch(error => {
            console.error(error);
            });
          // }
         

    };
    
    function SubmitButton(){
      if (profileupdate === null){
        return <button className="btn login-btn" type="submit" disabled>Update</button>  
      } 
      else {
        return <button className="btn login-btn" type="submit">Update</button>
      };
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
            <select id="signup-sector" name="category" className="signup-select" value={info.category_id} onChange={(event) => handleEdit(index, 'category_id', event.target.value)}> 
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
           
           <div className='row'>
             <div className='col-md-2 profile-image'>
             <img src={`${process.env.REACT_APP_RESOURCES_URL}images/${info.image}`} alt="" className="img-fluid update m-0" />
             </div>
             
           <div className='col-md-10 name-input placholder ml-2'>
           <input className="pt10" type="file" name='file' accept="image/*" placeholder="Upload image" onChange={handleImageUpload}/>
            </div>      
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