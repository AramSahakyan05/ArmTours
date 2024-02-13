import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { SignUpPage } from "../pages/SignUpPage";
import { LoginPage } from "../pages/LoginPage";
import { OverviewPage } from '../pages/OverviewPage';
import { useEffect } from "react";

export const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname === '/') navigate('/armtours');
  },[]);

    return (
      <Routes>
        <Route path={ROUTES.overview} element={<OverviewPage />}></Route>
        <Route path={ROUTES.signup} element={<SignUpPage />}></Route>
        <Route path={ROUTES.login} element={<LoginPage />}></Route>
      </Routes>
    )
} 