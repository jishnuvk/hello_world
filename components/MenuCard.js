import React, { useContext } from "react";
import "../stylesheets/MenuCard.css";
import MenuType from "./MenuType";
import { MenuContext } from "../context/MenuContext";

function MenuCard() {
	const menu = useContext(MenuContext);
	console.log(menu);
	return (
		<div className="container-fluid menu">
			<MenuType type={menu.categoryName} items={menu.categoryItems} />
		</div>
	);
}

export default MenuCard;
