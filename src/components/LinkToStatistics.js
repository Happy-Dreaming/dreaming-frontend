import React from "react";
import { Container } from "../styles/LinkToStatisticsStyled.js";
import { StyledLink } from "../styles/StyledLink.js";
import theme from "../styles/theme";

function LinkToStatistics() {
    return (
        <StyledLink to="/diary" color={theme.colors.secondary}>
            <Container>
                <div className="instructions">
                    <p className="title">드리밍 리포트</p>
                    <p className="subTitle">내 다이어리의 통계 확인하기</p>
                </div>
                <div className="icon"></div>
            </Container>
        </StyledLink>
    );
}

export default LinkToStatistics;
