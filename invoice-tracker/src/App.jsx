import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import { BasicTable, ViewTable } from './components/ViewTable';
import Nav from './components/Nav';
import ViewClickHandler from './components/Nav'


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="App">
        <Main/>
        <ViewTable/>
        <Nav/>
        <ViewClickHandler/>
      </div>
      
    );
  }
}
 
export default App;


