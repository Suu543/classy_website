import React from "react";

const DetailInfo = ({ register, page, setPage }) => {
  return (
    <div className="personal-general-info">
      <h1>상세정보를 입력해주세요</h1>

      <div className="personal-general-input-wrapper">
        <label htmlFor="base_resorts">
          팀 베이스 스키장을 입력해주세요 <br />
        </label>
        <small>여러 지점 운영 시 지점도 신청 가능</small>
        <input
          {...register("base_resorts")}
          id="base_resorts"
          name="base_resorts"
          type="text"
        />
      </div>

      <div className="personal-general-input-wrapper">
        <label htmlFor="lesson_resorts">
          레슨 가능한 스키장을 입력해주세요 <br />
        </label>
        <small>
          복수 입력 가능 (상관 없다면 상관 없음이라고 작성해주세요!)
        </small>
        <input
          {...register("lesson_resorts")}
          id="lesson_resorts"
          name="lesson_resorts"
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
