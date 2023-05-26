import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { ContactsHome } from "../pages/contacts/contacts";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<ProtectedRoute />}>
        <Route index element={<ContactsHome />} />
      </Route>
    </Routes>
  );
};
