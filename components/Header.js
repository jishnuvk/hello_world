import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-danger"
			style={{ position: "sticky", top: 0 , zIndex: 1}}> 
			<Link className="navbar-brand" to="/">
				Canteen
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#collapsible"
				aria-controls="collapsible"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="collapsible">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							<i className="fas fa-home" /> Home
							<span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/cart">
							<i className="fas fa-shopping-cart" /> Cart
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
