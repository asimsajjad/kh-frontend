import logo from './logo.svg';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes,
  Link,
  useNavigate
} from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/pages/home';
import Login from './components/pages/login/Login';
import Categories from './components/pages/category/Categories';
import Labours from './components/pages/labour/Category';
import Signup from './components/pages/signup/Signup';
import ForgotPassword from './components/pages/forgot-password/ForgotPassword';
import JobPost from './components/pages/job-post/JobPost';
import Profile from './components/pages/profile/Profile';
import ContactUs from './components/pages/contact-us/ContactUs';
import Terms from './terms/Terms.js';
import ProfileUpdate from './components/pages/profile-update/ProfileUpdate';

import Footer from './components/shared/Footer';

function App() {  

  return<>
      <Header/>  
      <Routes>
      <Route path="/" exact element={<Home />}/> 
      <Route path="/login" exact element={<Login />}/>
      <Route path="/categories" exact element={<Categories />}/> 
      <Route path="/labours" exact element={<Labours />}/>
      <Route path="/labours/:type" element={<Labours />}/>
      <Route path="/signup" exact element={<Signup />}/>
      <Route path="/forgot-password" exact element={<ForgotPassword />}/>      
      <Route path="/profile" exact element={<Profile />}/>
      <Route path="/profile/:type" exact element={<Profile />}/>
      <Route path="/profile-update" exact element={<ProfileUpdate/>} />
      <Route path="/terms" exact element={<Terms/>}/>
      <Route path="/contact-us" exact element={<ContactUs/>}/>
      <Route path="/index" exact element={<Home/>}/> 
      </Routes>        
    <Footer/></> 
}
export default App;