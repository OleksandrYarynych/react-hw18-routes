import React from 'react';
import {Link, BrowserRouter as Router, Route}  from 'react-router-dom';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Photos from "./components/Photos"
import Posts from "./components/Posts"
import Contacts from "./components/Contacts"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Route path="/main"  component={Main} />
        <Route path="/photo"  component={Photos}/>
        <Route path="/posts"  component={Posts}/>
        <Route path="/contact"  component={Contacts}/>
      </Router>
    </div>
  );
}

export default App;
