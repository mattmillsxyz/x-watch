import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Launches from './pages/launches';
import Launch from './pages/launch';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/launches">
          <Launches />
        </Route>
        <Route path="/launch/:id">
          <Launch />
        </Route>
      </Switch>
    </Router>
  );
}
