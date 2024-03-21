import React from "react";
import { Container } from "../styles/LottoPageStyled.js";

function LottoPage() {
    return (
        <Container>
            <div className="titleBox">
                <p className="title">드리밍 로또 번호 추천</p>
                <p className="subTitle">
                    꿈 일기로 포인트를 모아 로또 번호를 추천받을 수 있어요.
                </p>
                <p className="subTitle">분명 좋은 일이 있을거예요!</p>
                <p className="subTitle">- 번호 추천 1회당 100 point 차감</p>
            </div>
            <p className="userName">
                username 님의 <br /> 잔여 포인트 : 1000 point
            </p>

            <div className="lottoBox">
                <div className="lottos">
                    <div className="lotto">1</div>
                    <div className="lotto">2</div>
                    <div className="lotto">3</div>
                    <div className="lotto">4</div>
                    <div className="lotto">5</div>
                    <div className="lotto">6</div>
                </div>
                <div className="bonusLotto">
                    <p className="bonus">보너스 번호</p>
                    <div className="lotto">7</div>
                </div>
            </div>
            <div className="recommendBtn">번호 추천</div>
        </Container>
    );
}

export default LottoPage;
