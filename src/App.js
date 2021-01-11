import React, { useContext } from "react";

import { AuthState } from "@aws-amplify/ui-components";
import Home from "./page/home";
import Login from "./page/login";
import Privacy from "./page/privacy";
import Terms from "./page/termsandcondition";
import Sidebar from './components/sidebar'

import Index from "./components";

import { Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from './contexts/auth-context'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {

  const {authState,user} = useContext(AuthContext)

  return authState === AuthState.SignedIn && user ? (
    <React.Fragment>
      <Sidebar/>
      <Switch>
      <Route exact component={Index} path="/" />
      <Redirect path="/**" to="/" />;
    </Switch>
    </React.Fragment>
  ) : (
    <>
      <Sidebar/>
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