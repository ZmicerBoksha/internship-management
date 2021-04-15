import React, { MouseEvent } from "react";
import style from "./Burger.module.css";

class Burger extends React.Component {
	handleClick(event: MouseEvent) {
    event.preventDefault();
    const nav = document.querySelector(".cD3Jkg5pnwE1iFrIA_hds"); 
		nav?.classList.toggle("list-active");
  }

	render() {
		return (
			<div className={style.burger} onClick={this.handleClick}>
				<div className={style.line1}></div>
				<div className={style.line1}></div>
				<div className={style.line1}></div>
			</div>
		);
	}
}

export default Burger;