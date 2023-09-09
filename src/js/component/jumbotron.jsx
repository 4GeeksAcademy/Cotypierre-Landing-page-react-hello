import React from "react";

const jumbotron = () => {
	return (
		<div className="container my-5">
			<div className="position-relative p-5 border rounded p-3 mb-2 bg-light text-dark">
                <h1 className="display-4 d-flex">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                
                <p className="lead d-flex flex-row mb-3">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
		</div>
	);
};

export default jumbotron;