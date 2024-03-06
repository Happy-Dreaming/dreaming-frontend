import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Community from "./pages/CommunityPage.js";
import Dictionary from "./pages/DictionaryPage.js";
import Lotto from "./pages/LottoPage.js";
import LottoMap from "./pages/LottoMapPage.js";
import PostDiary from "./pages/PostDiary.js";
import Statistics from "./pages/Statistics.js";
import ViewDiary from "./pages/ViewDiary.js";
import LoginPage from "./pages/LoginPage.js";
import MainPage from "./pages/MainPage.js";
import DiaryPage from "./pages/DiaryPage.js";
import Navbar from "./components/Navbar.js";

function App() {
    const location = useLocation();

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/diary" element={<DiaryPage />} />
                <Route path="/community" element={<Community />} />
                <Route path="/lotto" element={<Lotto />} />
                <Route path="/lottoMap" element={<LottoMap />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/postDiary" element={<PostDiary />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/viewDiary" element={<ViewDiary />} />
            </Routes>

            {/* 첫 로그인 화면 제외 모든 화면에 navbar 설치 */}
            {location.pathname !== "/" && <Navbar />}
        </>
    );
}
export default App;
