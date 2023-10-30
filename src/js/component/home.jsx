import React from "react";
import PropTypes from 'prop-types';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = (props) => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark text-light justify-content-between" >
  			<div className="container-fluid" >
    			<a className="navbar-brand" href="#">
					{props.companyName}
				</a>
    			<button 
					className="navbar-toggler" 
					type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#navbarNav" 
					aria-controls="navbarNav" 
					aria-expanded="false" 
					aria-label="Toggle navigation"
				>
     				<span className="navbar-toggler-icon"></span>
   				</button>
    			<div className="collapse navbar-collapse flex-grow-0 ml-auto" id="navbarNav">
					<ul className="navbar-nav">
						{props.navItems.map ((item, index) => (
							<li className="nav-item" key={index}>
								<a className={`nav-link ${index === 0 ? "active" : ""}`} aria-current="page" href={item.link}>
									{item.text}
								</a>
							</li>
						))} 
					</ul>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
companyName: PropTypes.string,
navItems: PropTypes.array,
}

const Jumbotron = () => {
	return (
		<div className="">Jumbotron goes here</div>
	);
};

const Cards = () => {

	return (
		<div className="row">
			<div className="col-sm-3 mb-3">
				<div className="card text-center">
				<img src={rigoImage} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Special title treatment</h5>
					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
				</div>
			</div>
			<div className="col-sm-3 mb-3">
				<div className="card text-center">
				<img src={rigoImage} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Special title treatment</h5>
					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
				</div>
			</div>
			<div className="col-sm-3 mb-3">
				<div className="card text-center">
				<img src={rigoImage} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Special title treatment</h5>
					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
				</div>
			</div><div className="col-sm-3 mb-3">
				<div className="card text-center">
				<img src={rigoImage} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Special title treatment</h5>
					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<div className="">Footer goes here</div>
	)
}
export { NavBar, Jumbotron, Cards, Footer };