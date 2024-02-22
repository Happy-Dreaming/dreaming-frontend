import React from "react";
import { Mobile } from "../components/ReactResponse.js";

// import { StyledLink } from "../styles/StyledLink.js";
import { GlobalStyle, Container } from "../styles/LoginPageStyled.js";

import logo from "../images/logo_dreaming.png";
import kakao from "../images/kakao_login.png";

function LoginPage() {
    return (
        <Mobile>
            <GlobalStyle />
            <Container>
                <div className="logoAnimation">
                    <div className="logo">
                        <p className="intro">오늘은 어떤 꿈을 꾸셨나요?</p>
                        <img
                            src={logo}
                            alt="kakaoLogin"
                            className="logoImg"
                        ></img>
                    </div>
                    <div className="circle1"></div>
                </div>
                <div className="login">
                    <img
                        src={kakao}
                        alt="kakaoLogin"
                        className="loginImg"
                    ></img>
                </div>
            </Container>
        </Mobile>
    );
}

export default LoginPage;
