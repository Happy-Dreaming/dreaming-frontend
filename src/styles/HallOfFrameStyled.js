import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 80vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
        font-size: 1.3rem;
        font-weight: bold;
        margin: 0;
        color: ${theme.colors.secondary_character};
    }
    .subTitle {
        font-size: 0.9rem;
        margin-top: 5px;
        color: ${theme.colors.secondary_character};
    }

    .hallOfFrame {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .rankBox {
        width: 80vw;
        height: 8vh;
        background-color: ${theme.colors.box};
        margin: 6px 0;
        border-radius: 0.5rem;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .rank {
        width: 15vw;
        height: 15vw;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.8rem;
        font-weight: bold;
        color: ${theme.colors.secondary_character};
    }

    .diary {
        width: 60vw;
        height: inherit;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .diary_title {
        margin: 0;
        font-size: 0.9rem;
        font-weight: bold;
        color: ${theme.colors.secondary_character};
    }

    .diary_preview {
        margin: 3px 0 0 0;
        font-size: 0.8rem;
        color: ${theme.colors.third_character};
    }
`;
