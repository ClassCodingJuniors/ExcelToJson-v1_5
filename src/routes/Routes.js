import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Sidenav from '../pages/Sidenav';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/exceJson" component={Sidenav}/>
        <Redirect from="*" to="/exceJson" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
