import React from "react";
import Giphy from "./compoents/Giphy";
import Login from "../src/compoents/Login"
import "./App.css";
import Loader from "./compoents/Loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/giphy"  component={Giphy} />
        <Route path="/Loader"  component={Loader} />
      </Switch>
    </Router>
      {/* <h1>Shyam</h1> */}
    </>
  );
};
export default App;
