import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="text-center">
        Home <i class="fas fa-greater-than"></i> Login
      </div>
      <div className="text-center">
        <b>Login or Create an Account</b>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <div className="text-bold col-md-10 ms-auto">
              <b>New Customers</b>
              <hr style={{ width: "500px" }}></hr>
              <p>Registration is free and easy.</p>
              <ul>
                <li style={{ padding: "5px" }}>Faster Checkout</li>
                <li style={{ padding: "5px" }}>
                  Save multiple shipping addresses
                </li>
                <li style={{ padding: "5px" }}>
                  View and track orders and more
                </li>
              </ul>
              <Link to="/Signup" className="nav-link" aria-current="page"
                style={{
                  width: "220px",
                  height: "45px",
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "#f14d54",
                  marginTop: "61px",
                  textAlign: "center",
                }}
              >
                Create an Account
              </Link>
            </div>
          </div>

          <div class="col-sm-6">
            <div className="text-bold col-md-10">
              <b>Registered Customers</b>
              <hr style={{ width: "500px" }}></hr>
              <p>If you have an account with us, please log in.</p>
              <div
                className="container col-md-4 ms-auto my-2"
                style={{ margin: "40px", padding: "5px", width: "500px" }}
              >
                Email address*
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div
                className="container col-md-4 ms-auto my-2"
                style={{ margin: "40px", padding: "5px", width: "500px" }}
              >
                Password*
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <div className="my-3">

                  <Link to="/Productlisting" className="nav-link" aria-current="page"
                    style={{

                      width: "100px",
                      height: "45px",
                      color: "white",
                      borderRadius: "5px",
                      backgroundColor: "#f14d54",
                      textAlign: "center",
                    }}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;