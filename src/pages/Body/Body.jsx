
import React from "react";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { Users } from "../Users/Users";

import { Routes, Route, Navigate } from "react-router-dom";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </>
  );
};
