import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/pages/home';
import Login from './components/pages/login/Login';
import Categories from './components/pages/category/Categories';
import Labours from './components/pages/labour/Services';
import Signup from './components/pages/signup/Signup';
import ForgotPassword from './components/pages/forgot-password/ForgotPassword';
import JobPost from './components/pages/job-post/JobPost';
import Info from './components/pages/info/Info';

import ContactUs from './components/pages/contact-us/ContactUs';


import Footer from './components/shared/Footer';

function App() {  
  return  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact><Home/></Route>
      <Route path="/login" exact><Login /></Route>
      <Route path="/categories" exact><Categories /></Route>

      <Route path="/labours" exact><Labours /></Route>
      <Route path="/labours/:type"><Labours /></Route>

      <Route path="/signup" exact><Signup /></Route>
      <Route path="/forgot-password" exact><ForgotPassword /></Route>
      <Route path="/info" exact><Info /></Route>

      <Route path="/info/:type" exact><Info /></Route>
      
      <Route path="/contact-us" exact><ContactUs /></Route>
      <Route path="/index" exact><Home /></Route>
      <Redirect to="/" />
      
    </Switch>
    <Footer/>
</Router>;
}

export default App;


