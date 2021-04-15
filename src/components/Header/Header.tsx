import React from "react";

// import style from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import Burger from "./Burger/Burger";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrap">
          <Logo />
          <Navigation />
          <Search />
          <Burger />
        </div>
      </header>
    );
  }
}

export default Header;