import React from "react";
import { Container } from "../styles/LottoMapPageStyled";
import { StyledLink } from "../styles/StyledLink.js";
import LinkToLotto from "../components/LinkToLotto.js";

function LottoMapPage() {
    return (
        <Container>
            <LinkToLotto />

            <div className="mapTitleBox">
                <p className="map_title">주변 복권 판매처 지도</p>
                <p className="map_subTitle">
                    좋은 꿈을 꾸셨다면 복권 한 장 어떠신가요?
                </p>
            </div>

            <div className="map"></div>
        </Container>
    );
}

export default LottoMapPage;
