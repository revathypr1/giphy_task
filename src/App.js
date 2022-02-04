import React from "react";
import Giphy from "./compoents/Giphy";
import Login from "../src/compoents/Login"
import "./App.css";
import Loader from "./compoents/Loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./compoents/PrivateRoute";
import Signup from "./compoents/Signup";

const App = () => {
  return (
    <> 
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Signup" component={Signup}/>
        <PrivateRoute path="/giphy"  component={Giphy} />
        <Route path="/Loader"  component={Loader} />
       
      </Switch>
    </Router>
    
    </>
  );
};
export default App;
