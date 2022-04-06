import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >
            <img
              src="/images/tatvasoft.png"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="pull-right">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav"
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page" >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Signup" className="nav-link" aria-current="page" >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Cart" className="nav-link" aria-current="page" >
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
