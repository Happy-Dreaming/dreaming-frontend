import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 85vw;
    height: 11vh;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 1rem;
    background-color: ${theme.colors.secondary};
    box-shadow: -3px 12px 15px -12px rgba(187, 187, 187, 1);

    .icon {
        width: 30vw;
        height: 9vh;
    }

    .instructions {
        width: 40vw;
        height: 9vh;
    }

    .instructions > p {
        margin: 0;
    }

    .instructions > .title {
        margin: 1rem 0 0.4rem 0;
        font-size: 1.1rem;
        color: ${theme.colors.secondary_character};
        font-weight: bold;
    }

    .instructions > .subTitle {
        font-size: 0.8rem;
        color: ${theme.colors.third_character};
    }
`;
