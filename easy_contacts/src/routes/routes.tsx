import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginOrRegister } from '../pages/login/login';
import { Register } from '../pages/register/register';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginOrRegister/>} />
    </Routes>
  )
}