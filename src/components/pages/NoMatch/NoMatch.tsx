import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NoMatch.css";

const NoMatch: FunctionComponent = () => {
  const location = useLocation();

  return (
    <section className="noMatch">
      <h1>Page not found</h1>

      <h2>
        Sorry, the page <code>{location.pathname}</code> could not be found.
      </h2>

      <Link to="./" className="link">Go back to the home page</Link>
    </section>
  );
}

export default NoMatch;