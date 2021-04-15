import React from "react";
import { Link } from "react-router-dom";

import style from "./Navigation.module.css";

class Navigation extends React.Component {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		return (
			<nav className={style.nav}>
				<ul className={style.list}>
					<li className={style.item}>
						<Link to="/" className="link">Training list</Link>
					</li>
					<li className={style.item}>
						<Link to="/" className="link">About</Link>
					</li>
					<li className={style.item}>
						<Link to="/" className="link">FAQ</Link>
					</li>
			</ul>
			</nav>
		);
	}
}

export default Navigation;