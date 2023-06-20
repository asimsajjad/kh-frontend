import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Banner from './Banner';
import Search from './Search';

import PopularServices from './PopularServices';
import ChooseCategory from './ChooseCategory';
import Worker from './Worker';


// function App(){
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");
//   useEffect(() => {
//     axios
//       .get("http://localhost/khadim-hazir/api/employeesListing")
//       .then((response) => console.log(response.data))
//       .catch((error) => setIsError(error.message));
//   }, []);
// };

//  export default App

function Home() {
    return <>
    <Banner/>
    <Search/>
    <PopularServices/>
    <ChooseCategory/>
    <Worker/>
    </>;
  }
  export default Home;


