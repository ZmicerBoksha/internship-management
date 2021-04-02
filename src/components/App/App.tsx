import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "../HomePage";
import Navbar from "../shared/Navbar";
import TrainingDetailsPage from "../TrainingDetailsPage";
const App: React.FC = () => {
  const unused = "something";
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <HomePage />}></Route>
        <Route
          path="/details"
          component={() => <TrainingDetailsPage />}
        ></Route>
      </Switch>
    </>
  );
};
export default App;
