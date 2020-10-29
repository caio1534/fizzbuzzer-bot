import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import Bot from './components/Bot.js'
import WhatIsFB from './components/Whatisfb.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ Bot } />
        <Route path="/whatisfizzbuzzerbot" component={ WhatIsFB } />
        <Route path='/aboutme' component={ About } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
