import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }

    .linkToLotto {
        width: 83vw;
        height: 8vh;
        padding: 2vw;
        margin: 4vh 0 3vh 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};

        border-radius: 15px;
        box-shadow: -3px 12px 15px -12px rgba(187, 187, 187, 1);
    }

    .lotto_explanation {
        margin-right: 5vw;
    }

    .lotto_title {
        font-size: 1.15rem;
        font-weight: bold;
    }

    .lotto_subTitle {
        font-size: 0.8rem;
        margin-top: 1vw;
    }

    .lotto_icon {
        width: 10vw;
        height: 10vw;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 2.3rem;
    }
`;
