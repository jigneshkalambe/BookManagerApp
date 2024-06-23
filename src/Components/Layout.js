import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CardDetails from "./CardDetails";
import Axioshome from "../Pages/Axioshome";

const Layout = () => {
    return (
        <>
            <Header></Header>
            <div>
                <Routes>
                    {/* <Route path="/" element={<Home></Home>}></Route> */}
                    <Route path="/" element={<Axioshome></Axioshome>}></Route>
                    <Route path="/:id" element={<CardDetails></CardDetails>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default Layout;
