import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import styled from "styled-components";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
