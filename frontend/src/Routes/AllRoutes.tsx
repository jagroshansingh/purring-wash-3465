import React from "react";
import { Routes, Route } from "react-router-dom";
import { GamePage } from "../Pages/GamePage";
import { LoginPage } from "../Pages/LoginPage/Login/LoginPage";
import { SignupPage } from "../Pages/LoginPage/SignUp/SignupPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignupPage />} />
        <Route path="/" element={<GamePage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
