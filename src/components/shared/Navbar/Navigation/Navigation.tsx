import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		return (
			<ul>
				<li>
					<Link to="/">Training list</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">FAQ</Link>
				</li>
			</ul>
		);
	}
}

export default Navigation;