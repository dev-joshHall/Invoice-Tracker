import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { ViewTable } from './components/ViewTable';
import Navbar from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewClickHandler from './components/Nav'
import Dashboard from './components/Dashboard';
import UploadMainPage from './components/UploadMainPage';
import BulkUpload from './components/BulkUpload';
import Test from './components/test';
import CreateRecord from './components/CreateRecord'
import ViewTableFull from './components/ViewTableFull';


class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/view-table' element={<ViewTable/>} />
          <Route path='/upload' element={<UploadMainPage />} />
          <Route path='/upload/:upload-docs' element={<BulkUpload />} />
          <Route path='/test' element={<Test />} />
          <Route path='/CreateRecord' element={<CreateRecord />} />
          <Route path='/view-full' element={<ViewTableFull />} />
        </Routes>
      </Router>

    );
  }
}

export default App;


