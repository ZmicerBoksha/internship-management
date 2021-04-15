import React from "react";

class Search extends React.Component {
	render() {
		return (
			<form className="Navigation__search">
				<input type="search" id="search" name="search"></input>
			</form>
		);
	}
}

export default Search;