import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
  }  
  return (
    <div className="App">
      <button id="btn">Click</button>

      <button id="ABCD" className="btn btn-block">Notify</button>
    </div>
  );
}

export default App;
