import React from "react";
import style from "./Search.module.css";

class Search extends React.Component {
	render() {
		return (
			<form className={style.search}>
				<input type="search" id="search" name="search"></input>
			</form>
		);
	}
}

export default Search;