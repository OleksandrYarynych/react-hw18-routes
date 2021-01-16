import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Photos from "./components/Photos";
import Posts from "./components/Posts";
import Contacts from "./components/Contacts";
import ChosenContact from "./components/ChosenContact.js";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/photo" component={Photos} />
          <Route path="/posts" component={Posts} />
          <Route path="/contact" component={Contacts} exact />
          <Route path="/contact/:num" component={ChosenContact} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
