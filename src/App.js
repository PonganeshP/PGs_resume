import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Experience from "./components/experience";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
      </div>
      <div id="colorlib-main">
        <Introduction></Introduction>
        <About></About>
        <Timeline></Timeline>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
