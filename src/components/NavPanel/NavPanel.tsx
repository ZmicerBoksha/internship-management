import React from "react";

import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import Burger from "./Burger/Burger";
import "./NavPanel.css";

class NavPanel extends React.Component {
  render() {
    return (
      <header className="NavPanel">
        <div className="NavPanel__wrap">
          <Logo />
          <Navigation />
          <Search />
          <Burger />
        </div>
      </header>
    );
  }
}

export default NavPanel;