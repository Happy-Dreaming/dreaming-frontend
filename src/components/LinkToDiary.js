import React from "react";
import { Container } from "../styles/LinkToDiaryStyled.js";
import { StyledLink } from "../styles/StyledLink.js";
import theme from "../styles/theme";

function LinkToDiary() {
    return (
        <StyledLink to="/diary" color={theme.colors.secondary}>
            <Container>
                <div className="icon">icon</div>
                <div className="instructions">
                    <p className="title">꿈 다이어리</p>
                    <p className="subTitle">오늘은 어떤 꿈을 꾸셨나요?</p>
                </div>
            </Container>
        </StyledLink>
    );
}

export default LinkToDiary;
