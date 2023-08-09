import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import Banner from './Banner';
import Search from './Search';

import PopularServices from './PopularServices';
import ChooseCategory from './ChooseCategory';
import Worker from './Worker';
import { use } from 'i18next';

function Home() {
  useEffect(() => {
    // Update the title whenever the component mounts
    document.title = 'Khadim Hazir - Connect with the Right Talent for Your Needs';
  }, []);

    return <>
    <Banner/>
    <Search/>
    <PopularServices/>
    <ChooseCategory/>
    <Worker/>
    </>;
  }
  export default Home;

 