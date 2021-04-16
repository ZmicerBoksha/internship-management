import React from "react";
import { Link } from "react-router-dom";
import style from "./Logo.module.css";

class Logo extends React.Component {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		return (
			<div className={style.logo}>
				<Link to="/" className="link">Exadel training center</Link>
			</div>
		);
	}
}

export default Logo;