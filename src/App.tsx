import React from 'react';
import './App.css';
import { Navigation, Dashboard, Tweet } from './components/index'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/tweets/:id" component={Tweet} />
      </Switch>
    </div>
  );
}

export default App;
