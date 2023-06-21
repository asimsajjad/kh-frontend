import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import Banner from './Banner';
import Search from './Search';

import PopularServices from './PopularServices';
import ChooseCategory from './ChooseCategory';
import Worker from './Worker';

function index() {
    return <>
    <Banner/>
    <Search/>
    <PopularServices/>
    <ChooseCategory/>
    <Worker/>
    </>;
  }
  export default index;

 