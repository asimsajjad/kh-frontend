import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

function ProfileUpdate() {
    const { t, i18n } = useTranslation();
    const [profile, setProfile]=useState([]);
    const [profileupdate, setProfileUpdate]=useState(null);
    const [category, setCategory] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const profile_url='profileData';
    const update_url='updateProfile';

    const category_url='';
        useEffect(() => {
          const storedLanguage = Cookies.get('language');
            axios.get(`${category_url}`).then(response => {
              if(storedLanguage === "en"){
                setCategory(response?.data?.data?.en);
              }else if(storedLanguage === "ur"){
                setCategory(response?.data?.data?.ur);
              }else if(storedLanguage === "ar"){
                setCategory(response?.data?.data?.ar);
              }
            // setCategory(response?.data?.data?.en);
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
    setIsLoading(true);
    axios.post(`${profile_url}`, formData)
     .then(response => {
      if(!response?.data?.message.success){
        navigate(`/login`);
      }
    setProfile(response?.data?.data);
    setIsLoading(false);
    })
    .catch(error => {
    console.error(error);
    setIsLoading(false);
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
      setIsLoading(true);
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
          }

          const user=(profileupdate[0].username).replace(/ /g, '-');
          const user_slug=user.toLowerCase();
            axios.post(`${update_url}`, formData, config)
            .then(response =>{
              if(profile[0].user_type === 'employer'){
                navigate('/labours');
              }else{
                navigate('/categories');
              }
              // navigate(`/profile/${user_slug}`);
              setIsLoading(false);
            })
            .catch(error => {
            console.error(error);
            setIsLoading(false);
            });
    };
    
    function SubmitButton(){
      if (profileupdate === null){
        return <button className="btn login-btn" type="submit" disabled>{t("update")}</button>  
      } 
      else {
        return <button className="btn login-btn" type="submit">{t("update")}</button>
      };
    };  

    const renderUser =(<section className="login-section pl-3"> 
    {profile.map((info, index) => ( 
    <div className="container mt-5" key={info.user_id}>
      <div className="row login-form ">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}  >
            <h2 className="text-center pt-4">{t("profileUpdate")}</h2>
            {/* <div className="social-media-links d-flex justify-content-center pt-3">
            <Link to=""><i className="fa-brands fa-facebook"></i></Link>
              <Link href=""><i className="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i className="fa-brands fa-google-plus"></i></Link>
            </div>
            <p className="text-center">Or use your email for registeration</p> */}
          <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
        <div className="name-input mb-4 d-flex mt-4">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-user"></i></label>
          <input className="" type="name" name='username' placeholder={t("name")} value={info.username} onChange={(event) => handleEdit(index, 'username', event.target.value)}/>
        </div>
        <div className="name-input mb-4 d-flex">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-phone"></i></label>
          <input className="" type="number" name='phone_no' placeholder={t("phoneNumber")} value={info.phone_no} onChange={(event) => handleEdit(index, 'phone_no', event.target.value)}/>
        </div>
          
            {(() => {
        if (info.user_type !== "employer") {
          return (
            <div className="form-group">
            <div className="col-md-8 mb-4">
            <select id="signup-sector" name="category" className={i18n.language === 'en' ? "signup-select pl-2": "signup-select pr-2"} value={info.category_id} onChange={(event) => handleEdit(index, 'category_id', event.target.value)}> 
            {category.map(categories => ( <option key={categories.id} value={categories.id} >{categories.name}</option>))}
            </select>
            </div>
          </div>
          )
        } 
      })()}
           <div className="row mb-4">
              <div className="text-left">
                 <textarea className="form-control" type="name" name="address" id="floatingTextarea2" 
                 value={info.address} onChange={(event) => handleEdit(index, 'address', event.target.value)} placeholder={t("writeYourAddress")}></textarea>
              </div>              
            </div>
           </div>
            <div className='row'>
                <div className='profile-image'>
                  <img src={info.image ? `${process.env.REACT_APP_RESOURCES_URL}images/${info.image}` : `${process.env.REACT_APP_BASE_URL}assets/images/manager.png`} alt="" className="img-fluid update m-0" />
                </div> 
            </div>
            <div className='row'>  
               <div className='profile-image'>
                 <input className="pt10" type="file" name='file' accept="image/*" placeholder="Upload image" onChange={handleImageUpload}/>
            </div>
            </div>
            <SubmitButton/>
          </form>
        </div>
        <div className="col-md-4 pr-0">
          <div className="details">
            <h3 className="text-light">{t("welcomeToKhadimHazir")}</h3>
            <p className="text-light">{t("ifYouWantCahngePassword")}</p>
            <Link className="contact" to='/change-password'>{t("passwordUpdate")}<i className="ml-3 fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
    ))}
  </section>);

    return <div>
     {isLoading ? <LoadingSpinner /> : renderUser}
  </div>
  }
  export default ProfileUpdate;