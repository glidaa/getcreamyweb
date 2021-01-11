import React, { useContext } from "react";

import { AuthState } from "@aws-amplify/ui-components";
import Home from "./page/home";
import Login from "./page/login";
import Privacy from "./page/privacy";
import Terms from "./page/termsandcondition";

import Index from "./components";

import { Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from './contexts/auth-context'

function App() {

  const {authState,user} = useContext(AuthContext)

  return authState === AuthState.SignedIn && user ? (
    <Switch>
      <Route exact component={Index} path="/" />
      <Redirect path="/**" to="/" />;
    </Switch>
  ) : (
    <>
      <Switch>
        <Route exact component={Home} path="/home" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Privacy} path="/privacy" />
        <Route exact component={Terms} path="/termsandcondition" />
        <Redirect path="/**" to="/home" />;
      </Switch>
    </>
  );
}

export default App;
