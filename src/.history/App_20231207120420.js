import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css'; // Your main CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
