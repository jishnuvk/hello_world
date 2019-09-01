import React from "react";
import ControlAmount from "./ControlAmount";

function MenuType({ type, items }) {
	if (items !== undefined)
		return (
			<div className="pt-5">
				<div className="card">
					<div className="card-header">{type}</div>
					<div className="card-body">
						{items[0].map(foodItem => (
							<div className="row p-3" key={foodItem._id}>
								<div
									className="list-props row col-8"
									style={{ fontSize: "1.2rem" }}>
									<div className="col-5 p-0">{foodItem.itemName}</div>
									<div className="float-right" style={{ fontSize: "1.2rem" }}>
										{foodItem.price}
									</div>
								</div>
								<div className="col-4 ml-auto">
									<ControlAmount />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	else
		return (
			<div
				className="text-center"
				style={{ minHeight: "90%", alignSelf: "center" }}>
				<div className="spinner-border text-danger" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
}

export default MenuType;
