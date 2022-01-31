import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./form.css";

const Formpage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="form-wrapper">
        <div className="form-info">
          <h2>Partners</h2>
          <h4>
            회원 모집? 회원 관리? 코치님들의 고민을 이제 Classsy가 함께합니다!
          </h4>
        </div>
        <div className="form-body">
          <Link to="/partners/personal">개인등록하기</Link>
          <Link to="/partners/group">팀등록하기</Link>
        </div>
      </div>
    </div>
  );
};

export default Formpage;
