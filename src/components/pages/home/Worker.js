import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
function Worker() {
    return  <div className="workers">
    <div className="container">
      <div className="row">
        <div className="col-md-6 best">
        <div className="card">
  <img className="" src="assets/images/best.png"  alt="Card image"/>
  <div className="card-img-overlay">
  <div className="col-md-6 banner text-center">
        <Link to='/labours'><h1 className='color-text'>500+</h1>
          <p>Workers</p></Link>
        </div>
        <div className="col-md-4 banner1 text-center">
        <Link to='/categories'><h1 className='color-text'>300+</h1>
          <p>Jobs done</p></Link>
        </div>
  </div>
</div>
</div>
        <div className="col-md-6 find">
          <div className="worker-text ">
            <Link to="/labours"><h5 className="text-light">Find The Best <br/> <b className="text-dark">Workers</b> Here </h5></Link>
            <p className="text-light p">Search and Filters: Our advanced search and filtering options let you narrow down your search based on criteria such as skills, location, availability, and more. We provide Access to a Vast Pool of Talent, Streamlined Hiring Process, Customized and Reliable Workforce Solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>;
  }
  export default Worker;