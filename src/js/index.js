//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { NavBar, Jumbotron, Cards, Footer } from "./component/home.jsx";

//render your react application
ReactDOM.render(
<div>
    <NavBar />
    <Jumbotron />
    <Cards />
    <Footer />
</div>,
 document.querySelector("#app"));
