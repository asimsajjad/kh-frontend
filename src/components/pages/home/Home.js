import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Banner from './Banner';
import Search from './Search';

import PopularServices from './PopularServices';
import ChooseCategory from './ChooseCategory';
import Worker from './Worker';

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

 