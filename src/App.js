import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar'
import Upperbar from './Component/Upperbar';
import Homepage from './Component/Homepage'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Upperbar />
      <Homepage />
    </div>
  );
}

export default App;
