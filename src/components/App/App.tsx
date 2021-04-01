import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "../HomePage";
const App: React.FC = () => {
  const unused = "something";
  return (
    <Switch>
      <Route path="/" component={() => <HomePage />}></Route>
    </Switch>
  );
};
export default App;
