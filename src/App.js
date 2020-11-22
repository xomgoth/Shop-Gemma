
import React from 'react';
import './App.css';
import { EndFooter } from './components/EndFooter';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Menu } from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blogs from './components/Blogs';
import Shop from './components/Shop';

function App() {



  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

        </Switch>

        <Footer />
        <EndFooter />
      </div>
    </Router>
  );
}

export default App;
