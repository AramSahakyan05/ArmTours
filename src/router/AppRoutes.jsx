import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants";
import HomePage from "../pages/HomePage";


export const AppRoutes = () => {
    return (
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />}></Route>
      </Routes>
    )
} 