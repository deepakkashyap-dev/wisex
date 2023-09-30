import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../components/Home';

const ProjectRoutes = (props) => (
    <Routes>
        {/* <Route exact from="/" element={redirect("/dashboard")} /> */}
        {/* <Route exact path="/" element={ <Navigate to="/dashboard" /> } /> */}
        <Route path="/" element={<Home />} />
    </Routes>
);
export default ProjectRoutes;


