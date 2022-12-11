import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import RouteApp from "./pages/RouteApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <RouteApp />
  </Router>
);
