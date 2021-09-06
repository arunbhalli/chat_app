import React from 'react';
import { Switch, Route } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import Signin from './component/Signin';
import PrivateRoute from './component/PrivateRoute';
import Home from './component/Home';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
