import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Feed from './Feed.js';

function App() {
  return (
    <div className="app">
        {/* header */}
        <Header />
        {/* App Body */}
        <div className = "app__body">
            <Sidebar/>
            <Feed/>
        </div>
            {/* Feed */}
            {/* Widgets  */}
    </div>
  );
}

export default App;
