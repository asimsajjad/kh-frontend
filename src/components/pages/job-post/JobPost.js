function JobPost(){
return <div class="container mt-5">
<form class="row g-3 form">
    <div class="col-md-6 text-left">
        <label for="inputName4" class="form-label">Name</label>
        <input type="name" class="form-control" id="inputName4"/>
    </div>
    <div class="col-md-6 text-left">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="col-12 text-left">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div class="col-12 text-left">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div class="col-md-6 text-left">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="col-md-6 text-left">
        <label for="inputState" class="form-label">Choose your Experties</label>
        <select id="inputState" class="form-select">
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
    <div class="col-md-6 text-left">
        <label for="inputCity" class="form-label">Phone Number</label>
        <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="col-md-6 text-left">
        <label for="inputCity" class="form-label">Date of Birth</label>
        <input type="date" class="form-control" id="inputCity"/>
    </div>
    <div class="col-12 text-left">
        <div class="form-floating text-left">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
              ></textarea>
            <label class="text-left comment" for="floatingTextarea2">About You</label>
        </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
        <button class="btn post-btn">Post Now</button>
    </div>
</form>
</div>
} 

export default JobPost;