//imports go up here
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Add from "./components/Add";



//our app
function App() {
  return (
    //setup our APP routes
    <Router>
      <div>
        {/* This navbar will appear on all of our pages */}
        <Navbar />

        {/* This wrapper will contain the contents of our pages, whatever component is active based on the navbar */}
        <Wrapper>

          {/* our routes leading to different "pages" */}
          {/* Our home page and our add page */}
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/home" component = {Home} />
          <Route exact path = "/add" component = {Add} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;