import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Search";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <div className="container">
                <div className="text-center">
                    Home <i class="fas fa-greater-than"></i> Create an Account
                </div>
                <div className="text-center">
                    <b>Login or Create an Account</b>
                </div>
                <b>Personal Information</b>
                <hr></hr>
                Please enter the following information to create your account.
            </div>
            <form>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div className="col">
                                <label for="exampleInputName" class="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div className="col">
                                <label for="exampleInputName" class="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <b>Login Information</b>
                        <hr></hr>
                        <div class="col-sm-6">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <Link to="/Productlisting" className="nav-link" aria-current="page"
                                style={{
                                    width: "136px",
                                    height: "45px",
                                    color: "white",
                                    borderRadius: "5px",
                                    backgroundColor: "#f14d54",
                                    textAlign: "center",
                                }}
                            >
                                Register
                            </Link>
                        </div>
                        <div class="col-sm-6">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </>
    );
}

export default SignUp;