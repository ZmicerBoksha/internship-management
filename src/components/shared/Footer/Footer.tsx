import React, { FunctionComponent } from "react";

import Logo from "../Footer/Logo/Logo";
import Navigation from "./Navigation/Navigation";
import "./Footer.css";

const navigation = ["Training list", "About", "FAQ"];

const Footer: FunctionComponent = () => {

  //{ x.map((x, i) => <li key={i}><a href={x.url} className="link">{x.linkTitle}</a></li>) }


  return (
    <footer className="footer">
      <div className="wrap">
        <Logo />
        <Navigation arrTitle={navigation} />
        
        <div>
          <ul>
            <li>
              <a className="link" href="https://exadel.com/about-us/overview/">About Company</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/about-us/history/">History</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/about-us/leadership/">Leadership</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/about-us/careers/">Careers</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/about-us/partners/">Partners</a>
            </li>
          </ul>
        </div>
        <div>
        <ul>
            <li>
              <a className="link" href="https://exadel.com/newsroom/blog/">Blog</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/newsroom/published-articles/">Published Articles</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/newsroom/press-releases/">Press Releases</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/news/category/company-news/">Company News</a>
            </li>
            <li>
              <a className="link" href="https://exadel.com/newsroom/events/">Events</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy">
        &copy; Copyright { (new Date()).getFullYear() } Exadel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;