import React from "react";

function Editproduct() {
    return (
        <>
            <div>
                <div className="text-center">
                    <b>Edit Product</b>
                </div>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div className="text">
                                <label for="exampleInputName" class="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <label for="exampleInputName" class="form-label">Last Name</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <div className="text">
                                <label for="exampleInputName" class="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label"></label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-outline-success" type="submit">Save</button>
                            <button className="btn btn-outline-danger mx-2" type="submit">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Editproduct;