import React from 'react';
import Dashboard from './Dashboard';
import Test from './Test';
import { Router, Route } from 'react-router-dom';
import { history } from './history';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/test" exact component={Test} />
      </Router>
    </div>
  )
}

export default App;
