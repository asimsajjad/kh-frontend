import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Worker() {
  const { t, i18n } = useTranslation();
    return  <div className="workers" >
    <div className="container">
      <div className="row">
        <div className="col-md-6 best">
        <div className="card">
  <img className="" src="assets/images/best.png"  alt="Card image"/>
  <div className="card-img-overlay">
  <div className="col-md-6 banner text-center">
        <Link to='/labours'><h1 className='color-text'>500+</h1>
          <p>{t("workers")}</p></Link>
        </div>
        <div className="col-md-4 banner1 text-center">
        <Link to='/categories'><h1 className='color-text'>300+</h1>
          <p>{t("jobsDone")}</p></Link>
        </div>
  </div>
</div>
</div>
        <div className="col-md-6 find">
          <div className="worker-text " dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
           <h5 className="text-light">{t("findTheBest")} <br/>  <Link to="/labours"><b className="text-dark">{t("workers")}</b></Link> {t("here")} </h5>
            <p className="text-light p">{t("searchAndFilter")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>;
  }
  export default Worker;