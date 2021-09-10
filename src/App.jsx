import React from 'react';
import { Switch} from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import Signin from './component/Signin';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute'
import Home from './component/Home';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <Signin />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
