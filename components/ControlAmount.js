import React, { Component } from "react";
import "../stylesheets/ControlAmount.css";

export class ControlAmount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = event => {
		if (event.target.name === "increase") {
			if (this.state.value === 10) return;
			this.setState({ value: this.state.value + 1 });
		} else if (event.target.name === "decrease") {
			if (this.state.value === 0) return;
			this.setState({ value: this.state.value - 1 });
		}
	};

	render() {
		return (
			<div key={Math.random() * 10000000} className="container changeButtons">
				<button
					className="btn"
					onClick={this.handleChange}
					name="increase"
					id="increase">
					+
				</button>
				<input type="text" id="countValue" readOnly value={this.state.value} />
				<button
					className="btn"
					onClick={this.handleChange}
					name="decrease"
					id="decrease">
					-
				</button>
			</div>
		);
	}
}

export default ControlAmount;
