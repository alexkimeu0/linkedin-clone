import React from 'react';
import { Header, Sidebar, Feed } from './components'

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
