import { Button, Set, Stack, Text } from 'bumbag';
import React from 'react';
import { BrowserRouter as Router, Switch as RouteSwitch, Route } from "react-router-dom";
import './App.css';
import { Header } from './Header';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '10% 10% 40% 40% auto', height: '100vh' }}>
        <Header />
        <RouteSwitch>
          <Route path="/settings/">

          </Route>
          <Route path="/b/">

          </Route>
          <Route path="/u/">
              test
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </RouteSwitch>
      </div>
    </Router>
  )
}

export default App;
