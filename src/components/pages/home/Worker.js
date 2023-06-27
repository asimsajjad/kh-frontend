import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
function Worker() {
    return  <div className="workers">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="assets/images/Group 13.png" alt="" />
        </div>
        <div className="col-md-6">
          <div className="worker-text">
            <Link to="/labours"><h5 className="text-light">Find The Best <b className="text-dark">Workers</b> Here </h5></Link>
            <p className="text-light">Search and Filters: Our advanced search and filtering options let you narrow down your search based on criteria such as skills, location, availability, and more. We provide Access to a Vast Pool of Talent, Streamlined Hiring Process, Customized and Reliable Workforce Solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>;
  }
  export default Worker;