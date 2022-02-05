import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import styled from "styled-components";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
