import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: ${theme.sizes.containerWidth};
    height: 10vh;

    /* background-color: ${theme.colors.primary}; */
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 15px 15px 0 0;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .menu1 {
        width: 15vw;
        height: 15vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 0.9rem;
        /* color: ${theme.colors.primary_character}; */
        color: gray;
    }

    .menuIcon {
        font-size: 1.5rem;
    }
`;
