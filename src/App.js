import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import T9Keyboard from './components/T9Keyboard/T9Keyboard';
import Billboard from './components/Billboard/Billboard';
const App = () => (
  <Router>
  <div className="home-container">
    <h2 className="home-heading">Home Page</h2>
  </div>
    <Routes>
      <Route exact path="/" element={<Billboard />} />
      <Route path="/t9keyboard" element={<T9Keyboard />} />
    </Routes>
  </Router>
);
export default App;
