import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    margin: 0.5vh 0;
    .comm_diaryComponent {
        width: 85vw;
        height: 10vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        color: ${theme.colors.primary_character};
        border-bottom: 1px solid #f8f7ea;
    }

    .comm_diary_title {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 2px;
    }

    .comm_diary_preview {
        font-size: 0.9rem;
        margin-bottom: 5px;
    }

    .comm_diary_view {
        display: flex;
    }

    .comm_diary_view > p {
        font-size: 0.7rem;
        margin-right: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .comm_diary_view_icon {
        margin-right: 0.4rem;
    }
`;
