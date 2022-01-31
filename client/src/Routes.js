import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/HomePage";
import Formpage from "./components/FormPage";
import PersonalPage from "./components/PersonalPage";
import GroupPage from "./components/GroupPage";

const ClassyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/partners" element={<Formpage />} exact />
        <Route path="/partners/personal" element={<PersonalPage />} exact />
        <Route path="/partners/group" element={<GroupPage />} exact />
      </Routes>
    </Router>
  );
};

export default ClassyRoutes;
