import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { MenuProvider } from "../context/MenuContext";

import Header from "./Header";
import Footer from "./Footer";
import MenuCard from "./MenuCard";
import Cart from "./Cart";

class Master extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="variable">
					<Switch>
						<Route
							exact
							path="/"
							component={() => (
								<MenuProvider>
									<MenuCard />
								</MenuProvider>
							)}
						/>
						<Route exact path="/cart" component={() => <Cart />} />

						<Redirect to="/" />
					</Switch>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Master;
