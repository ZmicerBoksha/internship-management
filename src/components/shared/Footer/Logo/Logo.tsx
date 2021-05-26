import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

const Logo: FunctionComponent = () => {
  return (
    <div className="footer__logo">
      <Link to="/" className="link">Exadel training center</Link>
    </div>
  );
};

export default Logo;