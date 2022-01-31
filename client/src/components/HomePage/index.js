import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar";
import "./home.css";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <div className="main-1">
          <h2>
            <b>Classsy 하게 놀아보자! </b>
            <br />
            나만의 스포츠 레저라이프 <br /> Enjoy Feeling Classy, Sport Leisure
            Platform.
            <br />
            <b>Coming Soon~</b>
          </h2>
        </div>
        <div className="main-2">
          <h3>
            Classsy와 함께 스키장 트렌드를 이끌어갈 <br /> 프로 스키어
            코치님들을 모집합니다!
          </h3>
          <Link to="/partners">사전등록</Link>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
