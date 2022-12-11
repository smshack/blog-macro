import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Main from "../../components/layout/Main";
const Home = () => {
  return (
    <div className="wrapper">
      {/*  헤더 */}
      <Header />
      {/*  헤더 끝*/}
      <Main />

      <Footer />
      {/* 푸터 유형 */}
    </div>
  );
};

export default Home;
