import React from "react";
import { Container } from "../styles/HallOfFrameStyled.js";
// import { StyledLink } from "../styles/StyledLink.js";
import theme from "../styles/theme";

function HallOfFame({ page }) {
    return (
        // styled-component를 사용하려면 전체 태그에 써야한다.
        <Container page={page}>
            <div className="intro">
                <p className="title">명예의 전당</p>
                <p className="subTitle">
                    한 달간 가장 많은 사랑을 받은 꿈 이야기
                </p>
            </div>

            <div className="hallOfFrame">
                <div className="rankBox">
                    <p className="rank">1</p>
                    <div className="diary">
                        <p className="diary_title">제목</p>
                        <p className="diary_preview">미리보기</p>
                    </div>
                </div>
                <div className="rankBox">
                    <p className="rank">2</p>
                    <div className="diary">
                        <p className="diary_title">제목</p>
                        <p className="diary_preview">미리보기</p>
                    </div>
                </div>
                <div className="rankBox">
                    <p className="rank">3</p>
                    <div className="diary">
                        <p className="diary_title">제목</p>
                        <p className="diary_preview">미리보기</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HallOfFame;
