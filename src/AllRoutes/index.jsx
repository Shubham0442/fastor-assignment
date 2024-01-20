import React from "react";
import { Route, Routes } from "react-router-dom";
import { MobileNo, Otp, Restaurants } from "../Screens";
import PrivateRoute from "../HOF/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MobileNo />} />
      <Route path="/otp" element={<Otp />} />
      <Route
        path="/Restaurants"
        element={
          <PrivateRoute>
            <Restaurants />
          </PrivateRoute>
        }
      />
      <Route path="/restaurants/:restaurant_id" />
    </Routes>
  );
};

export default AllRoutes;
