import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/About/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (<Router>
    <div className="App">
    <Switch>
          <Route exact path='/' component={HomePage} />
          {/*<Route path="/log-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />*/}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
