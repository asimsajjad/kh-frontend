function Banner() {
    return <div className="main-banner" id="top">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="item header-text">
            <h2 className="heading-banner">Are you looking for workers?</h2>
            <p className="pera-banner">Career Growth: We believe in nurturing talent and providing opportunities for professional growth and development
              a moment's notice</p>
            <div className="down-buttons">
              <div className="main-blue-button-hover pt-5">
                <a href="#contact" className="banner-btn ">Hire a worker</a>
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