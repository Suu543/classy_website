import React from "react";

const DetailInfo = ({ register, page, setPage }) => {
  return (
    <div className="personal-general-info">
      <h1>상세정보를 입력해주세요</h1>

      <div className="personal-general-input-wrapper">
        <label htmlFor="resorts">
          레슨 가능한 스키장을 입력해주세요 <br />
        </label>
        <small>
          복수 입력 가능 (상관 없다면 상관 없음이라고 작성해주세요!)
        </small>
        <input
          {...register("resorts")}
          id="resorts"
          name="resorts"
          type="text"
        />
      </div>

      <div className="personal-general-input-wrapper">
        <label htmlFor="licenses">
          경력 및 자격증을 기입해주세요! <br />
        </label>
        <small>예) 레벨 2 데몬, 선수 출신, 코칭 경력 n년 등</small>
        <input
          {...register("licenses")}
          id="licenses"
          name="licenses"
          type="text"
        />
      </div>

      <div className="personal-general-button-wrapper">
        <button onClick={() => setPage(page - 1)}>이전</button>
        <button onClick={() => setPage(page + 1)}>요약</button>
      </div>
    </div>
  );
};

export default DetailInfo;
