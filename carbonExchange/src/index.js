
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No element with id='root' found in index.html");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// const rootElement = document.getElementById('root');
// if (!rootElement) {
//   throw new Error("No element with id='root' found in index.html");
// }
// const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );