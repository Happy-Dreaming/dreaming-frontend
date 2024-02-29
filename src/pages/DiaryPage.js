import React from "react";
import { Container } from "../styles/DiaryPageStyled.js";
import LinkToDiary from "../components/LinkToDiary.js";
import Diary from "../components/Diary.js";
import LinkToStatistics from "../components/LinkToStatistics.js";

function DiaryPage() {
    return (
        <Container>
            <div className="mypage">
                <div className="user">
                    <p className="hello">반가워요!</p>
                    <div className="username">
                        <p>user-1010 님</p>
                        <div className="editIcon">✍🏻</div>
                    </div>
                </div>
                <div className="point">
                    <p>💰 1000 point</p>
                </div>
            </div>
            <p className="today">2024년 3월 1일</p>
            <div className="link">
                <LinkToDiary />
            </div>
            <div className="link">
                <LinkToStatistics />
            </div>
            <Diary />
            <Diary />
            <Diary />
            <Diary />
            <Diary />
            <Diary />
        </Container>
    );
}

export default DiaryPage;
