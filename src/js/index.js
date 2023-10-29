//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { NavBar, Jumbotron, Cards, Footer } from "./component/home.jsx";

//set the navitems
const navItems = [
    { link: "#", text: "Home" },
    { link: "#", text: "About" },
    { link: "#", text: "Services" },
    { link: "#", text: "Contact" }
];

//render your react application
ReactDOM.render(
<div>
    <NavBar companyName="Start Bootstrap" navItems={navItems}/>
    <Jumbotron />
    <Cards />
    <Footer />
</div>,
 document.querySelector("#app"));
