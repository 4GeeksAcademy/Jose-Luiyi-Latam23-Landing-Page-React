//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import rigoImage from "../img/rigo-baby.jpg";

//import your own components
import { NavBar, Jumbotron, Cards, Footer } from "./component/home.jsx";

//set the navitems
const navItems = [
    { link: "#", text: "Home" },
    { link: "#", text: "About" },
    { link: "#", text: "Services" },
    { link: "#", text: "Contact" }
];

//set cards props
const cardsData = [
 {
    image: rigoImage,
    title: "Card title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ipsum!",
    cardLink: "#",
    buttonText: "Find Out More!"
 },
 {
    image: rigoImage,
    title: "Card title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ipsum!",
    cardLink: "#",
    buttonText: "Find Out More!",    
 },
 {
    image: rigoImage,
    title: "Card title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ipsum!",
    cardLink: "#",
    buttonText: "Find Out More!",
 },
 {
    image: rigoImage,
    title: "Card title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ipsum!",
    cardLink: "#",
    buttonText: "Find Out More!",
 },
];

//render your react application
ReactDOM.render(
    <React.Fragment>
        <NavBar 
        companyName="Start Bootstrap" 
        navItems={navItems}
        />
        <div className="container">
            <Jumbotron />
            <Cards cardsData={cardsData}
            />
        </div>
        <Footer />
    </React.Fragment>,
 document.querySelector("#app"));
