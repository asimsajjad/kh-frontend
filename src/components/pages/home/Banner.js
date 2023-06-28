import { Link } from "react-router-dom";

function Banner() {
    return <div className="main-banner" id="top">
    <div className="container banner">
      <div className="row">
        <div className="col-md-6">
          <div className="item header-text">
            <h2 className="heading-banner">Are you looking for workers?</h2>
            <p className="pera-banner">"Your Trusted Workforce Solution!
            Looking for talented and dedicated workers to join your team? Look no further! Khadim Hazir is your ultimate destination for finding top-notch professionals who are ready to contribute to your company's success.</p>
            <div className="down-buttons">
              <div className="main-blue-button-hover pt-5">
                <Link to="/labours" className="banner-btn ">Hire a worker</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 align-self-center">
          <img src="../assets/images/Working remotely.png" alt="aaa" className="img-banner" />
        </div>
      </div>
    </div>
  </div>;
  }
  export default Banner;