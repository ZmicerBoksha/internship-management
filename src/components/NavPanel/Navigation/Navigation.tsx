import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		return (
			<nav className="Navigation">
				<ul className="Navigation__list">
					<li className="Navigation__item">
						<Link to="/" className="link">Training list</Link>
					</li>
					<li className="Navigation__item">
						<Link to="/" className="link">About</Link>
					</li>
					<li className="Navigation__item">
						<Link to="/" className="link">FAQ</Link>
					</li>
			</ul>
			</nav>
		);
	}
}

export default Navigation;