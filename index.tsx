// The application is currently running in Static HTML mode via index.html.
// React mounting is disabled to prevent "Could not find root element" errors.
// To revert to a React App, ensure index.html has a <div id="root"></div> and uncomment the code below.

console.log("Portfolio running in Static HTML mode.");

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/