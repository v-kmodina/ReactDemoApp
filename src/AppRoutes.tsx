import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Login = React.lazy(() => import("./pages/Login"));

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
