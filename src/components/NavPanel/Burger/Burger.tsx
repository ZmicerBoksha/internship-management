import React, { MouseEvent } from "react";

class Burger extends React.Component {
	handleClick(event: MouseEvent) {
    	event.preventDefault();
    	const nav = document.querySelector(".Navigation__list");
		const search = document.querySelector(".Navigation__search");
		nav?.classList.toggle("NavPanel_active");
		search?.classList.toggle("NavPanel_active");
  	}

	render() {
		return (
			<div className="Navigation__burger" onClick={this.handleClick}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
}

export default Burger;