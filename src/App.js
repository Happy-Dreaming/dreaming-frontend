import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import MainPage from "./pages/MainPage.js";
import DiaryPage from "./pages/DiaryPage.js";
import Navbar from "./components/Navbar.js";

// import styled from "styled-components";

function App() {
    const location = useLocation();

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/diary" element={<DiaryPage />} />
            </Routes>

            {/* 첫 로그인 화면 제외 모든 화면에 navbar 설치 */}
            {location.pathname !== "/" && <Navbar />}
        </>
    );
}
export default App;
