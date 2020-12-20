import React from 'react';
import './App.css';
import { Navigation, Dashboard, Tweets } from './components/index'
import { Switch, Route } from 'react-router-dom';
import { getInitialData } from './services/index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/tweets/:id" component={Tweets} />
      </Switch>
    </div>
  );
}

export default App;
