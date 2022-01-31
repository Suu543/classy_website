import React from "react";
import { createPersonal } from "../../actions/personal";

const SummaryInfo = ({ handleSubmit, getValues, page, setPage }) => {
  let summary = {};
  summary["name"] = getValues("name");
  summary["email"] = getValues("email");
  summary["phone"] = getValues("phone");
  summary["resorts"] = getValues("resorts");
  summary["licenses"] = getValues("licenses");

  const savePersonalInfo = async (info) => {
    try {
      await createPersonal(info);
      alert(`${summary.name}님 등록해주셔서 감사합니다!`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      className="personal-general-info"
      onSubmit={handleSubmit((data) => {
        savePersonalInfo(data);
      })}
    >
      <h1>요약</h1>

      <div className="personal-general-input-wrapper">
        <ul className="personal-general-summary">
          <li>
            <b>name:</b> {summary.name}
          </li>
          <li>
            <b>email:</b> {summary.email}
          </li>
          <li>
            <b>phone:</b> {summary.phone}
          </li>
          <li>
            <b>resorts:</b> {summary.resorts}
          </li>
          <li>
            <b>licenses:</b> {summary.licenses}
          </li>
        </ul>
      </div>

      <div className="personal-general-input-wrapper">
        <button onClick={() => setPage(page - 1)}>이전</button>
        <button style={{ marginTop: "1rem" }} type="submit">
          제출
        </button>
      </div>
    </form>
  );
};

export default SummaryInfo;
