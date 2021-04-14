import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import Navbar from "./shared/Navbar";
import TrainingDetailsPage from "./TrainingDetailsPage";
import { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://reqres.in/api",
});
const cache = new LRU({ max: 20 });

configure({ axios, cache });
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details" component={TrainingDetailsPage } />
      </Switch>
    </Router>
  );
};

export default App;