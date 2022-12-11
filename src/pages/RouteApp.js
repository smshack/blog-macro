import { useEffect, useState } from "react";

import {  Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import "../styles/style.scss";
import Home from "./Home";
import axios from "axios";
import _ from "lodash";
import config from "../config/config";
import "bootstrap/dist/css/bootstrap.css";
const RouteApp = () => {
const [button, setButton] = useState(true);
const [id, setId] = useState("");
const [pw, setPw] = useState("");
const [authState, setAuthState] = useState({
  id: "",
  nvuserlist: [],
});
const changeButton = () => {
  pw.length >= 5 ? setButton(false) : setButton(true);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const userdata = await axios.post(`${config.api.site}/api/user/login`, {
    id,
    pw,
  });
  console.log({
    id: _.get(userdata, "data.data.id"),
    nvuserlist: _.get(userdata, "data.data.nvuserlist"),
  });

  setAuthState({
    id: _.get(userdata, "data.data.id"),
    nvuserlist: _.get(userdata, "data.data.nvuserlist"),
  });
}

useEffect(() => {
  console.log(authState, "authState");
}, [authState]);
  return (
    <>
      {_.isEmpty(_.get(authState, "nvuserlist")) && (
        <div className={`container`}>
          <div className="login_wrapper">
            <div className="logo">
              <h1>Smart macro</h1>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <input
                  placeholder="아이디"
                  id="id"
                  className="login"
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  onKeyUp={changeButton}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="비밀번호"
                  id="password"
                  className="login"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  onKeyUp={changeButton}
                />
              </div>

              <div className="login-button">
                <button type="login" className="btn btn-primary">
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!_.isEmpty(_.get(authState, "nvuserlist")) && (
        <Home authState={authState} setAuthState={setAuthState} />
      )}
    </>
  );
};

export default RouteApp;
