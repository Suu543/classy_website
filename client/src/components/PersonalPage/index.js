import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Navbar";
import GeneralInfo from "./GeneralInfo";
import DetailInfo from "./DetailInfo";
import SummaryInfo from "./SummaryInfo";

const PersonalPage = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [showPage, setShowPage] = useState(false);
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <GeneralInfo register={register} setPage={setPage} page={page} />;
    } else if (page === 1) {
      return <DetailInfo register={register} setPage={setPage} page={page} />;
    } else if (page === 2) {
      return (
        <SummaryInfo
          handleSubmit={handleSubmit}
          getValues={getValues}
          setPage={setPage}
          page={page}
        />
      );
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="form-wrapper">
        <div className="form-info">
          <h2>개인등록하기</h2>
        </div>
        <div className="form-button">
          <button onClick={() => setShowPage(!showPage)}>등록하기</button>
        </div>
        {showPage && <PageDisplay />}
      </div>
    </div>
  );
};

export default PersonalPage;
