import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useParams, Redirect, useNavigate    } from 'react-router-dom';
import Alert from '../../Alerts/alert';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function Signup() {
    const { t, i18n } = useTranslation();
    const [user, setUser]=useState('');
    const [category, setCategory] = useState([]);
    const [alert, setAlert] = useState(null);
    const [usertype, setUserType] = useState('employer');
    const [selectedImage, setSelectedImage] = useState(null);
    const url='createUser';
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const user_id = localStorage.getItem('user_id');
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [countryname, setCountryName]=useState('');
    // const [userLocation, setUserLocation] = useState(null);

  const handlePlaceSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      let country = '';
      for (const component of results[0].address_components) {
        if (component.types.includes('country')) {
          country = component.long_name;
          setCountryName(country);
          break;
        }
      }
      setCoordinates(latLng);
      setUser((prevUser) => ({ ...prevUser, address: address }));
    } catch (error) {
      console.error('Error while geocoding address:', error);
    }
  };

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
      setUserType(e.target.value);
    };

    const handleImageUpload = (e) => {
      console.log(e.target.files)
    setSelectedImage(e.target.files[0]);
    };

    const category_url='';
        useEffect(() => {
          const storedLanguage = Cookies.get('language') ? Cookies.get('language') : 'en';
          if(user_id != null){
            navigate("/labours");
          }
          setIsLoading(true);
            axios.get(`${category_url}`).then(response => {
              if(storedLanguage === "en"){
                setCategory(response?.data?.data?.en);
              }else if(storedLanguage === "ur"){
                setCategory(response?.data?.data?.ur);
              }else if(storedLanguage === "ar"){
                setCategory(response?.data?.data?.ar);
              }
            // setCategory(response?.data?.data?.en);
            setIsLoading(false);
            }).catch(error => {
            console.error(error);
            setIsLoading(false);
          });
          
       }, []
       );
 
    const handleSubmit = (e) => {
      setIsLoading(true);
      e.preventDefault();
      console.log(coordinates);
          const formData = new FormData()
          const config = {
            headers: { 'content-type': 'multipart/form-data' }
           }
          formData.append('username',  user.username,)
          formData.append('email',  user.email,)
          formData.append('password',  user.password,)
          formData.append('user_type',  usertype,)
          formData.append('phone_no',  user.phone_no,)
          formData.append('address',  user.address,)
          formData.append('category_id',  user.category,)
          formData.append('image',  selectedImage)
          formData.append('latitude', coordinates.lat,)
          formData.append('longitude', coordinates.lng,)
          formData.append('country', countryname,)

          axios.post(`${url}`, formData, config)
          .then(response => {
            setIsLoading(false);
            if(response?.data?.message?.success){
               localStorage.setItem('user_id', response?.data?.data[0].user_id)
               localStorage.setItem('user_type', response?.data?.data[0].usertype)
              if(response?.data?.data[0].usertype=='employee'){
                // window.location.href ="categories";
                navigate("/categories");
              }else{              
                localStorage.setItem('employer_latitude', coordinates.lat)
                localStorage.setItem('employer_longitude', coordinates.lng)  
                //window.location.href ="labours";
                navigate("/labours");
              }
            } 
            if(response?.data?.message?.success){
              const user=(response?.data?.message?.msg).replace(/ /g, '_');
              showAlert(user, "success")
            }else{
              const user=(response?.data?.message?.msg).replace(/ /g, '_');
              showAlert(user, "danger")
            }
            
          }).then(setUser(
            {username: "",
            email: "", 
            password: "",
            phone_no: "",
            address: "",
            image: "",})
          )
          .catch(error => {
          console.error(error);
          setIsLoading(false);
          });

    };
  
    function SubmitButton(){
      // if (user === null){
      //   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
      //   if(regex.test(user.email)){
      //     if(usertype !== "employee"){
      //       return <button className="btn login-btn" type="submit" onClick={handleSubmit} >{t("signUp")}</button>
      //     }else if(usertype !== "employer" && user.category){
      //       return <button className="btn login-btn" type="submit" onClick={handleSubmit} >{t("signUp")}</button>
      //     }
      //     else{
      //       return <button className="btn login-btn" type="submit" onClick={handleSubmit} disabled >{t("signUp")}</button>
      //     }
      //   }else{
      //     return <button className="btn login-btn" type="submit" onClick={handleSubmit} disabled >{t("signUp")}</button>
      //   }

      // } else {
        return <button className="btn login-btn" type="submit">{t("signUp")}</button>
    };  

    const renderUser=(<section className="login-section pl-3" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>    
    <div className="container mt-5">
      <div className="row login-form ">
        <div className="col-md-8">
        <Alert alert={alert}/>
          <form action="" onSubmit={handleSubmit} >
            <h2 className="text-center pt-4">{t("createAccount")}</h2>
            {/* <div className="social-media-links d-flex justify-content-center pt-3">
            <Link to=""><i className="fa-brands fa-facebook"></i></Link>
              <Link href=""><i className="fa-brands fa-linkedin"></i></Link>
              <Link href=""><i className="fa-brands fa-google-plus"></i></Link>
            </div>
            <p className="text-center">Or use your email for registeration</p> */}
            <div className="container pt-3">
              <div className="row">
                {/* <div className="col-md-12"> */}
                <div className="col-md-6">
                <input className="form-check-input m-4" type="radio" name="usertype" id="radio2" value="employer" checked={usertype === 'employer'} onChange={handleSelect} />
                  <div className="form-check form-check-inline">
                    {/* <div className="row .redio-buttons-image"> */}
                      <p><img src="assets/images/employee.png" alt="" className=" labour"/></p>
                      <label>{t("employer")}</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <input className="form-check-input m-4" type="radio" name="usertype" id="radio1" value="employee" checked={usertype === 'employee'} onChange={handleSelect}/>
                    <div className="form-check form-check-inline">
                      {/* <div className="row .redio-buttons-image"> */}
                        <p><img src="assets/images/labour.png" alt="" className=" labour"/></p>
                        <label>{t("labour")}</label>
                      </div>
                    </div>                  
            {/* </div> */}
          </div>
        </div>
        <div>
        <div className="name-input mb-4 d-flex">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-user"></i></label>
          <input className="" type="name" name='username' placeholder={`${t("name")} (${t("required")})`} value={user.username} onChange={handleChange} required title="Please enter your username. This field is required."/>
        </div>
        <div className="name-input mb-4 d-flex">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="far fa-envelope"></i></label>
          <input className="" type="email" name='email' placeholder={`${t("email")} (${t("required")})`} value={user.email} onChange={handleChange} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required/>    
        </div>
        <div className="password-input mb-4 d-flex">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-lock	"></i></label>
          <input className="password-input" type="password" name="password" id="" placeholder={`${t("password")} (${t("required")})`} value={user.password} onChange={handleChange} required/>
        </div>
        <div className="name-input d-flex">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-phone"></i></label>
          <input className="" type="number" name='phone_no' placeholder={`${t("phoneNumber")} (${t("required")})`} value={user.phone_no} onChange={handleChange} required/>
        </div>
          
            {(() => {
        if (usertype !== "employer") {
          return (
            <div className="form-group">
            <div className="col-md-12 d-flex">
            <div className="custom-dropdown">
            <select id="signup-sector" name="category" className="signup-select" placeholder='select a category' onChange={handleChange}  required>
            <option value="" disabled selected hidden>{`${t("selectACategory")} (${t("required")})`}</option> 
            {category.map(categories => ( <option key={categories.id} value={categories.id} >{categories.name}</option>))}
            </select>
            </div>
            </div>
          </div>
          )
        } 
      })()}
           {/* Use PlacesAutocomplete for Places Autocomplete */}
           <div className="row">
                  <div className="text-left">
                  <div className="autocomplete-container">
                    <PlacesAutocomplete
                      value={user.address}
                      onChange={(address) => setUser((prevUser) => ({ ...prevUser, address: address }))}
                      onSelect={handlePlaceSelect}
                      searchOptions={{ types: ['address']}} //componentRestrictions: { country: 'pk' } Set the country code if you want to limit the results to a specific country
                      >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className="name-input mb-4 mt-4 pl-1">
                          <input
                            {...getInputProps({
                              className: "form-control",
                              placeholder: t("writeYourAddress")
                            })}
                            required></input>
                          <div className='auto-address mt-3'>
                            {loading ? <div>Loading...</div> : null}
                            {suggestions.map((suggestion) => {
                              const style = {
                                backgroundColor: suggestion.active ? '#afabab' : '#fff',
                                cursor: 'pointer',
                              };
                              return (
                                <div className='auto-address-options pl-2' {...getSuggestionItemProps(suggestion, { style })}>
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                    </div>
                  </div>
                </div>
           <div className="name-input d-flex">
              <label  className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-user"></i></label>
              <input className="pt10" type="file" name='file' placeholder="Upload image" value={user.files} onChange={handleImageUpload}/>
            </div>
            
            <div className="row pt10">
              <div className={i18n.language === 'en' ? "col-6 text-left" : "col-6 text-right"} >
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label>&nbsp;&nbsp; {t("rememberMe")}</label>
              </div>
            </div>
            </div>
            <SubmitButton/>
          </form>
        </div>
        {/* <Link className="text-center mb-3 mobile-screen d-none" to="/login">Already have an Account<i
            className="ml-3 bi bi-arrow-right"></i></Link> */}
        <div className={i18n.language === 'en' ? "col-md-4 pr-0" : "col-md-4 pl-0"}>
          <div className={i18n.language === 'en' ? "details" : "details-rtl"}>
            <h3 className="text-light">{t("welcomeToKhadimHazir")}</h3>
            <p className="text-light">{t("toKeepConnected")}</p>
            <Link className="contact" to="/login">{t("alreadyHaveAnAccount")}<i className={i18n.language === 'en' ? 'ml-3 fas fa-arrow-right' : 'mr-3 fas fa-arrow-left'}></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>);
  if(user_id == null){
    return <>
    {isLoading ? <LoadingSpinner /> : renderUser}
    </>
  }
    
  }
  export default Signup;