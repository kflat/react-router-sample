import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Car from './components/Car';
import About from './components/About';

render(
  <Router>
    <Route path="/" component={App} />
    <Route path="/cars" component={Car} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById('app')
);