// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
