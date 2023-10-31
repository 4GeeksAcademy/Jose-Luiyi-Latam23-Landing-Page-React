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
		<div className="bg-light p-5 rounded">
			<h1>A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet consectectuur adipisicing elit lpsa, ipsam, elegendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam novis ulklo aspernatur vitae fugiat numquam repellat.
			</p>
			<a
				className="btn btn-lg btn-primary"
				href="/docs/5.0/components/navbar/"
				role="button"
			>
				Call to action
			</a>
		</div>
	);
};


const Cards = (props) => {
	const cardsData = props.cardsData || [];

	return (
		<div className="row">
			{cardsData.map((card, index) =>(
				<div className="col-sm-3 mb-3" key={index}>
				<div className="card text-center">
				<img src={card.image} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">{card.title}</h5>
					<p className="card-text">{card.description}</p>
					<a href={card.link} className="btn btn-primary">{card.buttonText}</a>
				</div>
				</div>
			</div>
				))}
		</div>
	);
};

Cards.propTypes = {
	cardsData: PropTypes.array,
};

const Footer = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">clc
      <div className="container-fluid">
        <div className="row text-center text-light justify-content-center w-100">
          <h5 className="text">Copy right © Your Website 2023</h5>
        </div>
      </div>
    </nav>
  );
};

export { NavBar, Jumbotron, Cards, Footer };