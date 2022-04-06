import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Search";
import { Link } from "react-router-dom";

function Cart() {
    return (
        <>
            <div className="text-center">
                <b>Cart Page</b>
            </div>
            <div className="container" style={{ width: "600px" }}>
                <b>My Shopping Bag(4 items)</b>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Campus Sutra</h5>
                                <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                <Link to="/" className="nav-link" aria-current="page">
                                    Remove
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Campus Sutra</h5>
                                    <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                    <Link to="/" className="nav-link" aria-current="page">
                                        Remove
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Campus Sutra</h5>
                                    <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                    <Link to="/" className="nav-link" aria-current="page">
                                        Remove
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Campus Sutra</h5>
                                    <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                    <Link to="/" className="nav-link" aria-current="page">
                                        Remove
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/" className="nav-link" aria-current="page"
                        style={{

                            width: "140px",
                            height: "40px",
                            color: "white",
                            borderRadius: "5px",
                            backgroundColor: "#f14d54",
                            textAlign: "center",
                        }}
                    >
                        Place order
                    </Link>
                </div>

            </div>
        </>
    );
}

export default Cart;