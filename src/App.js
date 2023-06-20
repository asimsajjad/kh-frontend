import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Categories from './components/pages/category/Categories';
import Services from './components/pages/service/Services';
import Signup from './components/pages/signup/Signup';
import ForgotPassword from './components/pages/forgot-password/ForgotPassword';
import JobPost from './components/pages/job-post/JobPost';
import Info from './components/pages/info/Info';

import Contact from './components/pages/contact-us/Contact';


import Footer from './components/shared/Footer';

function App() {  
  return  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact><Home/></Route>
      <Route path="/login" exact><Login /></Route>
      <Route path="/category" exact><Categories /></Route>
      <Route path="/service" exact><Services /></Route>
      <Route path="/signup" exact><Signup /></Route>
      <Route path="/forgot-password" exact><ForgotPassword /></Route>
      <Route path="/info" exact><Info /></Route>
      <Route path="/jobPost" exact><JobPost /></Route>
      <Route path="/contact" exact><Contact /></Route>
      <Route path="/index" exact><Home /></Route>
      <Redirect to="/" />
      
    </Switch>
    <Footer/>
</Router>;
}

export default App;

// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from 'axios';

// const App = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   // using Promises
//   useEffect(() => {
//     axios
//       .get("http://localhost/khadim-hazir/api/employeesListing")
//       .then((response) => console.log(response.data))
//       .catch((error) => setIsError(error.message));
//   }, []);

// //plz subscribe to thapa technical
//   return (
//     <>
//       <h1>Axios Tutorial</h1>
//       {/* {isError !== "" && <h2>{isError}</h2>}

//       <div className="grid">
//         {myData.map((post) => {
//         const { username, employee_id, category_name } = post;
//         return (
//       <div key={employee_id} className="card">
//         <h2>{username}</h2>
//         <p>{category_name}</p>
//       </div>
//     );
//   })}
// </div> */}
//     </>
//   );
// };

// export default App; 
