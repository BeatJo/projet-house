import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './assets/fonts/Building_Typeface.ttf'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './navigation/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

