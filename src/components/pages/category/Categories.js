import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import LoadingSpinner from "../../loader/LoadingSpinner";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrenPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const recordsPerPage= 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const url='';
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${url}`)
      .then(response => {
        setCategories(response?.data?.data?.en);
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false)
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
      const renderUser = (<div>
        <div className="container mt-5">
      <div className="col-md-12">
          <h1 className="cat text-center">Categories</h1>
      </div>
      </div>
      <div className="container pt-3 ">
      <div className="row">
       {records.map((category) => (
        <div className="col-md-3 mb-3" key={category.id}>
          <Link to={`/labours/${category.slug}`} activeclasscame="current">
          <div className="card">
          
            <div className="card-body categories">
              <img src={`${process.env.REACT_APP_RESOURCES_URL}uploads/category/${category.image}`} alt={category.image} className="categories rounded mx-auto d-block"/>
            </div>
            
          </div>
          
        <div className="card-body cuntent text-center">
        <p className={`category m-3`} > {category.name}</p>
        </div>
        </Link>
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
            <Link to="/categories" key={i} className="page-link" onClick={()=> changeCpage(n)}>{n}</Link>
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
 </div> );
  return (<>
    {isLoading ? <LoadingSpinner /> : renderUser}
  </>);
}
  export default Categories;