import React from "react";
import { Container } from "../styles/LinkToLottoStyled.js";
import { StyledLink } from "../styles/StyledLink.js";

function LottoMapPage() {
    return (
        <StyledLink to="/lotto">
            <Container>
                <div className="linkToLotto">
                    <div className="lotto_explanation">
                        <p className="lotto_title">
                            드리밍의 이번 주 로또 번호!
                        </p>
                        <p className="lotto_subTitle">
                            꿈 일기 포인트로 로또 번호를 추천 받아요.
                        </p>
                    </div>
                    <div className="lotto_icon">🎱</div>
                </div>
            </Container>
        </StyledLink>
    );
}

export default LottoMapPage;
