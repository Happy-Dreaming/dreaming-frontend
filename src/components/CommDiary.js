import React from "react";
import { Container } from "../styles/CommuDiaryStyled";

function CommDiary() {
    return (
        <Container>
            <div className="comm_diaryComponent">
                <p className="comm_diary_title">제목</p>
                <p className="comm_diary_preview">미리보기</p>
                <div className="comm_diary_view">
                    <p>
                        <div className="comm_diary_view_icon">🧑🏻‍💻</div> 작성자
                    </p>
                    <p>
                        <div className="comm_diary_view_icon">🧑🏻‍💻</div> 100개
                    </p>
                    <p>
                        <div className="comm_diary_view_icon">🧑🏻‍💻</div> 500개
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default CommDiary;
