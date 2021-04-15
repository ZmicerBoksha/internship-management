import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import WebFont from "webfontloader";
import App from "./components/App";

WebFont.load({
  google: {
    families: ["Crete Round"]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
