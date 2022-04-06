import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Search";

function Productpage() {
  return (
    <>
      <div className="text-center" style={{ margin: "5px" }}>
        <b>Product page</b>
      </div>

      <form className="d-flex" style={{ margin: "5px", padding: "5px", justifyContent: "right" }}>
        <input className="form-control me-2 pull-right " style={{ width: "300px" }} type="search" placeholder="Search..." aria-label="Search" />
        <button className="btn btn-outline-danger" type="submit">Add Product</button>
      </form>

      <div className="container" style={{ alignItems: "center" }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Ttitulo</th>
              <th scope="col">Fonte De Dasos</th>
              <th scope="col">Query</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ISBM Followup</td>
              <td>Data Source 1</td>
              <td>Teste</td>
              <td style={{ alignContent: "right" }}>
                <button className="btn btn-outline-success" type="submit">Edit</button>
                <button className="btn btn-outline-danger mx-2" type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ISBM Followup</td>
              <td>Data Source 1</td>
              <td>Teste</td>
              <td>
                <button className="btn btn-outline-success" type="submit">Edit</button>
                <button className="btn btn-outline-danger mx-2" type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ISBM Followup</td>
              <td>Data Source 1</td>
              <td>Teste</td>
              <td>
                <button className="btn btn-outline-success" type="submit">Edit</button>
                <button className="btn btn-outline-danger mx-2" type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>ISBM Followup</td>
              <td>Data Source 1</td>
              <td>Teste</td>
              <td>
                <button className="btn btn-outline-success" type="submit">Edit</button>
                <button className="btn btn-outline-danger mx-2" type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>ISBM Followup</td>
              <td>Data Source 1</td>
              <td>Teste</td>
              <td>
                <button className="btn btn-outline-success" type="submit">Edit</button>
                <button className="btn btn-outline-danger mx-2" type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>ISBM Followup</td>
              <td>Data Source 1</td>
              <td>Teste</td>
              <td>
                <button className="btn btn-outline-success" type="submit">Edit</button>
                <button className="btn btn-outline-danger mx-2" type="submit">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>ISBM Followup</td>
              <td>Data Source 1</td>
              <td>Teste</td>
              <td>
                <button className="btn btn-outline-success" type="submit">Edit</button>
                <button className="btn btn-outline-danger mx-2" type="submit">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container" style={{ justifyContent: "right" }}>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>


    </>
  );
}

export default Productpage;