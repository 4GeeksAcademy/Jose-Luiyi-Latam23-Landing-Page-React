import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = () => {
	return (
		<div className="bg-light p-5 rounded mb-3">
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

export { Jumbotron };