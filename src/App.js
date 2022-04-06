import React from "react";
import Login from "./components/Login";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Productpage from "./components/Productpage";
import Editproduct from "./components/Editproduct";
import Signup from "./components/Signup";
import Productlisting from "./components/Productlisting";
import Cart from "./components/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Search />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Productlisting" component={Productlisting} />
          <Route path="/Editproduct" component={Editproduct} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
