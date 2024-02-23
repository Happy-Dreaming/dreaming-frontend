import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: ${theme.sizes.containerWidth};
    height: 10vh;

    background-color: ${theme.colors.primary};

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .menu1,
    .menu2,
    .menu3,
    .menu4,
    .menu5 {
        width: 15vw;
        height: 15vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 0.9rem;
        color: ${theme.colors.primary_character};
    }

    .menuIcon {
        font-size: 1.6rem;
    }
`;
