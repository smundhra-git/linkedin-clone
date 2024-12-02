import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
        {/* header */}
        <Header />
        {/* App Body */}
        <div className = "app_body">
            <Sidebar/>
        </div>
            {/* Feed */}
            {/* Widgets  */}
    </div>
  );
}

export default App;
