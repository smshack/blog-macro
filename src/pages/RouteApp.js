import { useEffect, useState } from "react";

import {  Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import "../styles/style.scss";
import Home from "./Home";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";
const RouteApp = () => {
  const location = useLocation();
  return (
    <div className={`container`}>
      <Switch>
        <>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route path="/v1" component={Home} />
          </div>
        </>
      </Switch>
    </div>
  );
};

export default RouteApp;
