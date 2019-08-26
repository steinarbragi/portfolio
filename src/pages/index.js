import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import LandingPage from "./LandingPage/LandingPage.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
//import LoginPage from "./LoginPage/LoginPage.jsx";
import Success from "./SuccessPage/SuccessPage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/profile" component={ProfilePage} />
      {/*<Route path="/login-page" component={LoginPage} /> */}
      <Route path="/" component={LandingPage} />
      <Route path="/success" component={Success} />
    </Switch>
  </Router>
);
