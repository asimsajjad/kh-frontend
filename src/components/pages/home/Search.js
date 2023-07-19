import React, { useState, useEffect, useRef } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showList, setShowList] = useState(false);
  const [categoryAvailable, setCategoryAvailable] = useState(true);
  const navigate = useNavigate();

  const categories_url = 'index';
  useEffect(() => {
    axios
      .get(`${categories_url}`)
      .then((response) => {
        setCategories(response?.data?.data?.en);
        setFilteredCategories(response?.data?.data?.en);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCategoryAvailable(true); // Reset category availability when the user starts typing
    if (!event.target.value) {
      setFilteredCategories(categories);
      setShowList(false);
    } else {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowList(true);
    }
  };

  const handleCategorySelect = (categoryName) => {
    setSearchQuery(categoryName);
    setFilteredCategories(categories);
    setShowList(false);
  };

  const handleSearch = () => {
    const formData = new FormData();
    axios
      .get(`${categories_url}/${searchQuery}`, formData)
      .then((response) => {
        if (response?.data?.data[0]) {
          navigate(`/labours/${response?.data?.data[0].slug}`);
          setCategoryAvailable(true);
        } else {
          setCategoryAvailable(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="input-box" ref={searchRef}>
              <i className="fas fa-search mr-3 "></i>
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                className="search-input"
                placeholder="How can we help?"
              />
              <button onClick={handleSearch} className="button search-btn">
                search
              </button>
              {!categoryAvailable && showList && ( // Hide the message when the list is not shown
                <p className="category-not-available">This category is not available.</p>
              )}
            </div>
          </div>
          {showList && (
                <div className="col-md-7 category-list">
                  {filteredCategories.map((category) => (
                    <div
                      key={category.id}
                      className="category-item"
                      onClick={() => handleCategorySelect(category.name)}
                    >
                      <p className="category-item">{category.name}</p>
                    </div>
                  ))}
                </div>
              )}
        </div>
      </div>
  <div className=" container our-section rounded">
    <div className="row">
      <div className="col-lg-2 col-sm-6">
      <Link to='/labours/handy-person'>
        <div className="card border-0 ">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output.png" className="card-img-top  mx-auto " alt="..."/>
            <p className="card-title text-center services pt-3 ">Handy person</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-6 ">
      <Link to='/labours/landscaping'>
        <div className="card border-0 ">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (1).png" className="card-img-top  mx-auto " alt="..."/>
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Landscaping</p>
          </div>
        </div>
        </Link>
      </div>
      
      <div className="col-lg-2 col-sm-6 ">
      <Link to='/labours/plumbing-services'> 
        <div className="card border-0 ">
        <div className="mx-auto">
          <img src="assets/images/svgviewer-png-output (2).png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
           <p className="card-title text-center services ">Plumbing</p>
          </div>
        </div>
        </Link>
      </div>
      
      <div className="col-lg-2 col-sm-6 ">
      <Link to='/labours/elctrician'>
        <div className="card border-0 ">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (3).png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Electrician</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-6">
      <Link to='/labours/remodling'>
        <div className="card border-0">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output.png" className="card-img-top  mx-auto " alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Remodeling</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-2 col-sm-6">
      <Link to='/labours/roof-work'>
        <div className="card border-0">
          <div className="mx-auto">
            <img src="assets/images/svgviewer-png-output (5).png" className="card-img-top  mx-auto" alt="..." />
          </div>
          <div className="card-body">
            <p className="card-title text-center services ">Roofing</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  </div>
  </> );
  }
  export default Search;