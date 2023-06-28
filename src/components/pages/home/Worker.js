import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
function Worker() {
    return  <div className="workers">
    <div className="container">
      <div className="row">
        <div className="col-md-6 best">
        <div className="row">
        <div className="col-md-6">
        
        </div>
        <div className="col-md-6 banner text-center">
        <h1>500+</h1>
          <p>Workers</p>
        </div>
        <div className="col-md-8 mt-5">

          </div>
        <div className="col-md-4 banner1 text-center">
        <h1>300+</h1>
          <p>freelance work Posted</p>
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