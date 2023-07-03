import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrenPage] = useState(1);
  const recordsPerPage= 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const url='';
  useEffect(() => {
    axios.get(`${url}`)
      .then(response => {
        setCategories(response?.data?.data?.en);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const records = categories.slice(firstIndex, lastIndex);
    const npage = Math.ceil(categories.length/recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1); 
  
    function prePage(){
      if(currentPage !== 1){
      setCurrenPage(currentPage-1);
      }
      }
      function changeCpage(id){
      setCurrenPage(id);
      }
      function nextPage(){
        if(currentPage === npage){
          setCurrenPage(1);
        }else{
          setCurrenPage(currentPage+1);
        }
      }
  return (<>
    <div className="container mt-5">
      <div className="col-md-12">
          <h1 className="cat text-center">Categories</h1>
      </div>
      </div>
      <div className="container pt-3 ">
      <div className="row">
       {records.map(category => (
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body categories">
            <Link to={`/labours/${category.slug}`} activeClassName="current">
              <img src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`} alt={category.image} className="categories rounded mx-auto d-block"/>
              </Link>
            </div>
          </div>
        <div className="card-body cuntent text-center">
        <Link to={`/labours/${category.slug}`} className={`categories m-3`}> {category.name}</Link>
        </div>
      </div>      
        ))} 
    </div>
  </div> 

  {(() => {
        if (npage>1) {
          return (
  <ul className='pagination' style={{justifyContent: 'center'}}>
      <li className='page-item'>
      <Link to="/categories" className="page-link" onClick={prePage}>Prev</Link>
      </li>
      {
        numbers.map((n, i) =>(
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <Link to="/categories" className="page-link" onClick={()=> changeCpage(n)}>{n}</Link>
          </li>
        ))
      }
       <li className='page-item'>
      <Link to="/categories" className="page-link" onClick={nextPage}>Next</Link>
      </li>
    </ul>
          )
    } 
  })()}
  
  </>);
}
  export default Categories;