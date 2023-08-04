import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom';
import LoadingSpinner from "../../loader/LoadingSpinner";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function ProfileUpdate() {
    const { t, i18n } = useTranslation();
    const [profile, setProfile]=useState([]);
    const [profileupdate, setProfileUpdate]=useState(null);
    const [category, setCategory] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [addressInput, setAddressInput] = useState('');
    // const [selectedAddress, setSelectedAddress] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [countryname, setCountryName]=useState('');

    // Handler for address suggestions selection
    const handleSelectAddress = async (address) => {
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
        // Do something with latLng if needed.
        setAddressInput(address); // Update the address input value
        setCoordinates(latLng);
        handleEdit(0, 'address', address); // Update the address field in the profile state
      } catch (error) {
        console.error('Error selecting address', error);
      }
    };
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
       useEffect(() => {
        // Set the initial value of addressInput to info.address
        if (profile.length > 0) {
          setAddressInput(profile[0].address);
        }
      }, [profile]);

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
console.log('coordinates',coordinates);
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(profileupdate);
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
          formData.append('latitude', coordinates.lat,)
          formData.append('longitude', coordinates.lng,)
          formData.append('country', countryname,)
          if(selectedImage){
            formData.append('image',  selectedImage)
          }

          const user=(profileupdate[0].username).replace(/ /g, '-');
          // const user_slug=user.toLowerCase();
            axios.post(`${update_url}`, formData, config)
            .then(response =>{
              // localStorage.removeItem('employer_latitude')
                // localStorage.removeItem('employer_longitude')
              if(profile[0].user_type === 'employer'){
                localStorage.setItem('employer_latitude', coordinates.lat)
                localStorage.setItem('employer_longitude', coordinates.lng)
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

    const renderUser =(<section className="login-section pl-3" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}> 
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
          <div>
        <div className="name-input mb-4 d-flex mt-4">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-user"></i></label>
          <input className="" type="name" name='username' placeholder={t("name")} value={info.username} onChange={(event) => handleEdit(index, 'username', event.target.value)}/>
        </div>
        <div className="name-input d-flex">
          <label className={i18n.language === 'en' ? "": "pr-3 pl-2"}><i className="fas fa-phone"></i></label>
          <input className="" type="number" name='phone_no' placeholder={t("phoneNumber")} value={info.phone_no} onChange={(event) => handleEdit(index, 'phone_no', event.target.value)}/>
        </div>
          
            {(() => {
        if (info.user_type !== "employer") {
          return (
            <div className="form-group">
            <div className="col-md-12 mb-4 d-flex">
            <select id="signup-sector" name="category" className={i18n.language === 'en' ? "signup-select pl-2": "signup-select pr-2" } value={info.category_id} onChange={(event) => handleEdit(index, 'category_id', event.target.value)}> 
            {category.map(categories => (<option key={categories.id} value={categories.id} >{categories.name}</option>))}
            </select>
            </div>
          </div>
          )
        } 
      })()}
           {/* <div className="row mb-4">
              <div className="text-left">
                 <textarea className="form-control" type="name" name="address" id="floatingTextarea2" 
                 value={info.address} onChange={(event) => handleEdit(index, 'address', event.target.value)} placeholder={t("writeYourAddress")}></textarea>
                 
              </div>              
    </div>*/}
     <div className="autocomplete-container">
            <div className="row mt-4">
          <div className="text-left">
          <PlacesAutocomplete
              value={addressInput}
              onChange={setAddressInput}
              onSelect={handleSelectAddress}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className={i18n.language === 'en' ? "name-input mb-4 pl-1" : "name-input mb-4 pr-2 " }>
                  {/* Corrected: Pass inputProps to input element */}
                  <input
                    {...getInputProps({
                      placeholder: t('writeYourAddress'),
                      className: '', // Add the necessary class for proper styling
                    })}
                    type="name"
                    name="address"
                    id="floatingTextarea2"
                    value={addressInput}
                    required
                  />
                  <div className='auto-address'>
                    {loading && <div >Loading...</div>}
                    {suggestions.map((suggestion, index) => {
                      const style = {
                        backgroundColor: suggestion.active ? '#afabab' : '#fff',
                        cursor: 'pointer',
                      };
                      return (
                        <div className="auto-address-options pl-3"
                          key={index}
                          {...getSuggestionItemProps(suggestion, { style })}
                        >
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
            </div>
            <SubmitButton/>
          </form>
        </div>
        <div className={i18n.language === 'en' ? "col-md-4 pr-0" : "col-md-4 pl-0"}>
          <div className={i18n.language === 'en' ? "details" : "details-rtl"}>
            <h3 className="text-light">{t("welcomeToKhadimHazir")}</h3>
            <p className="text-light">{t("ifYouWantCahngePassword")}</p>
            <Link className="contact" to='/change-password'>{t("passwordUpdate")}<i className={i18n.language === 'en' ? 'ml-3 fas fa-arrow-right' : 'mr-3 fas fa-arrow-left'}></i></Link>
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