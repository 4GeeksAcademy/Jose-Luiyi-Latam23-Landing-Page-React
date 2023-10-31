import React from "react";
import PropTypes from 'prop-types';

const Cards = (props) => {
	const cardsData = props.cardsData || [];

	return (
		<div className="row">
			{cardsData.map((card, index) =>(
				<div className="col-sm-3 mb-3" key={index}>
				<div className="card text-center">
				<img src={card.image} className="card-img-top mt-1" alt="..."/>
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

export { Cards };