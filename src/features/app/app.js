import React from 'react';
import { Route } from 'react-router-dom';
import { Nav } from '../nav/nav';
import './app.css';

import { Counter } from '../counter/counter';
import { About } from '../about/about';

export const App = ({ match }) => (
  <div className="App">
    <div className="App-header">
      <h2>Welcome to React</h2>
    </div>
    <Nav />
    <Route path="/counter" component={Counter} />
    <Route path="/about" component={About} />
  </div>
);
