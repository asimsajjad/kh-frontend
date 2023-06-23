function JobPost(){
return <div className="container mt-5">
<form className="row g-3 form">
    <div className="col-md-6 text-left">
        <label for="inputName4" className="form-label">Name</label>
        <input type="name" className="form-control" id="inputName4"/>
    </div>
    <div className="col-md-6 text-left">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="col-12 text-left">
        <label for="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div className="col-12 text-left">
        <label for="inputAddress2" className="form-label">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div className="col-md-6 text-left">
        <label for="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="col-md-6 text-left">
        <label for="inputState" className="form-label">Choose your Experties</label>
        <select id="inputState" className="form-select">
            <option>Experties...</option>
            <option>Plumbing</option>
            <option>Cleaner</option>
            <option>Roofing</option>
            <option>Remodeling</option>
            <option>Painter</option>
            <option>Landscaping</option>
            <option>Handyman</option>
            <option>Electrician</option>
        </select>
    </div>
    <div className="col-md-6 text-left">
        <label for="inputCity" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="col-md-6 text-left">
        <label for="inputCity" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="inputCity"/>
    </div>
    <div className="col-12 text-left">
        <div className="form-floating text-left">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
              ></textarea>
            <label className="text-left comment" for="floatingTextarea2">About You</label>
        </div>
    </div>
    <div className="col-12 d-flex justify-content-center">
        <button className="btn post-btn">Post Now</button>
    </div>
</form>
</div>
} 

export default JobPost;