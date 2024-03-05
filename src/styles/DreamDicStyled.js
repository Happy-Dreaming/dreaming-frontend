import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    .dream {
        width: 85vw;
        border-bottom: 1px solid #f8f7ea;
        margin: 1vh;
    }

    .dream_title {
        font-size: 1rem;
        margin-bottom: 0.5vh;
        color: ${theme.colors.primary_character};
    }

    .dream_detail {
        font-size: 0.8rem;
        margin-bottom: 0.5vh;
        color: ${theme.colors.primary_character};
    }
`;
