import React from "react";

const GeneralInfo = ({ register, setPage, page }) => {
  return (
    <div className="personal-general-info">
      <h1>정보를 입력해주세요</h1>

      <div className="personal-general-input-wrapper">
        <label htmlFor="name">성함을 입력해주세요</label>
        <input {...register("name")} id="name" name="name" type="text" />
      </div>

      <div className="personal-general-input-wrapper">
        <label htmlFor="email">이메일을 입력해주세요</label>
        <input {...register("email")} id="email" name="email" type="email" />
      </div>

      <div className="personal-general-input-wrapper">
        <label htmlFor="phone">전화번호를 입력해주세요 (특수문자제외)</label>
        <input {...register("phone")} id="phone" name="phone" type="text" />
      </div>

      <div className="personal-general-button-wrapper">
        <button onClick={() => setPage(page + 1)}>다음</button>
      </div>
    </div>
  );
};

export default GeneralInfo;
