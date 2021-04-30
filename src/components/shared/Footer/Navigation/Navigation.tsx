import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type NavProps = {
  arrTitle: Array<string>
}

const Navigation: FunctionComponent<NavProps> = ({ arrTitle }) => {
  const listItems = arrTitle.map((x, i) => <li className="Navigation__item" key={i}>
      <Link to="/" className="link">{ x }</Link>
    </li>
  );

  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        { listItems }
			</ul>
    </nav>
  );
}

export default Navigation;