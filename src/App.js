import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import NotFoundPage from "./components/notFoundPage/notFoundPage.js";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Josh" />}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/clock" component={Clock} />
        <Route component={NotFoundPage} />
        <Route path="/welcome:name" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
