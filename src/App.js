
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home/Home'
class App extends Component {


  render() {

    return (
      <BrowserRouter basename="/sites/Launchpad-stg/SitePages/ReactSharepointCall/index.aspx">
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
