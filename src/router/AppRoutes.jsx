import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants";
import { HomePage } from "../pages/HomePage";
import { SignUpPage } from "../pages/SignUpPage";

export const AppRoutes = () => {
    return (
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />}></Route>
        <Route path={ROUTES.signup} element={<SignUpPage />}></Route>
      </Routes>
    )
} 