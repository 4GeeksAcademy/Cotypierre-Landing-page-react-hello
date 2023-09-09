import React from "react";

const navbar = (props) => {
	return (
		<div className="text-center">
			<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid">
                    <p className="text-white fs-5 fw-bold my-auto ms-auto">Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">{props.item1}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
		</div>
	);
};

export default navbar;