import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "100%", height: "80px" }}>

        <div className="center">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="What are you looking for..." aria-label="Search" />

            <Link to="#" className="nav-link" aria-current="page"
              style={{

                width: "129px",
                height: "40px",
                color: "white",
                borderRadius: "5px",
                backgroundColor: "#80BF32",
                textAlign: "center",
              }}
            >
              Search
            </Link>
            <Link to="#" className="nav-link mx-2" aria-current="page"
              style={{

                width: "129px",
                height: "40px",
                color: "white",
                borderRadius: "5px",
                backgroundColor: "#f14d54",
                textAlign: "center",
              }}
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
