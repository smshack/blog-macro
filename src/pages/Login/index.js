import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';
const Login = () => {
  const [button,setButton] = useState(true)
  const [id,setId ] = useState("")
  const [pw, setPw] = useState("");
   const changeButton = () => {
    pw.length >= 5 ? setButton(false) : setButton(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id, pw);
   
   
  };
  return (
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
          <button
            type="login"
            className="btn btn-primary"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
