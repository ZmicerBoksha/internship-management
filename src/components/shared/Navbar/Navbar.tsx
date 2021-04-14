import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/index";
import Navigation from "./Navigation/index";
import Search from "./Search/index";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <div>
          <Logo />
          <Navigation />
          <Search />
        </div>
      </nav>
    );
  }
}

export default Navbar;