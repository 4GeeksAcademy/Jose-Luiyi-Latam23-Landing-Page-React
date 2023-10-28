import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark text-light justify-content-between" >
  			<div className="container-fluid" >
    			<a className="navbar-brand" href="#">Start Bootstrap</a>
    				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     					<span className="navbar-toggler-icon"></span>
   					 </button>
    			<div className="collapse navbar-collapse flex-grow-0 ml-auto" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		// <div className="text-center">
		// 	<h1 className="text-center mt-5">Hello Rigo!</h1>
		// 	<p>
		// 		<img src={rigoImage} />
		// 	</p>
		// 	<a href="#" className="btn btn-success">
		// 		If you see this green button... bootstrap is working...
		// 	</a>
		// 	<p>
		// 		Made by{" "}
		// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 		love!
		// 	</p>
		// </div>
	);
};

export { NavBar };