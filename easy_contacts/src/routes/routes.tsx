import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { ContactsHome } from "../pages/contacts/contacts";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<ContactsHome />} />
    </Routes>
  );
};
