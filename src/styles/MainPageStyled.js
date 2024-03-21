import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    position: absolute;
    width: ${theme.sizes.containerWidth};
    height: ${theme.sizes.containerHeight};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .banner {
        width: ${theme.sizes.containerWidth};
        height: 30vh;
        background-color: ${theme.colors.primary};

        color: white;
    }
    .diary {
        width: ${theme.sizes.containerWidth};
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .award {
        width: ${theme.sizes.containerWidth};
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
