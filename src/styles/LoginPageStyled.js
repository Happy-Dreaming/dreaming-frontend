import styled, { createGlobalStyle, keyframes } from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'TTHakgyoansimKkokkomaR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_keris@1.0/TTHakgyoansimKkokkomaR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`;

const fadeIn = keyframes`
  from {
    opacity: 0; // 처음에는 투명
  }
  to {
    opacity: 1; // 나중에는 나타남
  }
`;

const slide = keyframes`
  0% {
    top:-70vh; // 처음에는 투명
  }
  70%
  {
    top: 0;
  }
  100% {
    top:-10vh; // 나중에는 나타남
  }
`;

export const Container = styled.div`
    position: absolute;
    width: ${theme.sizes.containerWidth};
    height: ${theme.sizes.containerHeight};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logoAnimation {
        position: absolute;
        top: -70vh;
        animation: ${slide} 2.5s ease-in-out forwards;
    }

    .logo {
        width: 110vw;
        height: 70vh;
        background-color: ${theme.colors.primary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .circle1 {
        position: relative;
        z-index: -1;
        top: -25px;
        width: 100vw;
        height: 20vh;
        background-color: ${theme.colors.primary};
        border-radius: 0 0 50% 50%;
        border: 20px solid ${theme.colors.secondary};
        box-shadow: -3px 12px 15px -12px rgba(187, 187, 187, 1);
    }

    .intro {
        font-family: "TTHakgyoansimKkokkomaR";
        font-size: 1.4rem;
        font-weight: 100;
        color: white;
        margin-bottom: 30px;
        margin-top: 30vh;
    }

    .logoImg {
        width: 75vw;
    }

    .login {
        width: ${theme.sizes.containerWidth};
        height: 20vh;
        position: absolute;
        bottom: 0;
        z-index: -2;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .loginImg {
        box-shadow: -3px 12px 15px -12px rgba(187, 187, 187, 1);
        opacity: 0;
        animation: ${fadeIn} 1s ease-in-out forwards;
        animation-delay: 2.5s;
    }
`;
