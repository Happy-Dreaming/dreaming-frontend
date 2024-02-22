import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import MainPage from "./pages/MainPage.js";

// import styled from "styled-components";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
}
export default App;
