import React from "react";
import { Container } from "../styles/DiaryStyled.js";

function DiaryPage() {
    return (
        <Container>
            <div className="diaryComponent">
                <div className="diary_dateBox">
                    <p className="diary_date">2024년 1월 1일</p>
                    <hr />
                </div>
                <div className="diaryBox">
                    <div className="diary_img"></div>
                    <div className="diary">
                        <div className="diary_title">
                            제목 <div className="lockIcon">🔒</div>
                        </div>
                        <div className="diary_priview">미리보기</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DiaryPage;
