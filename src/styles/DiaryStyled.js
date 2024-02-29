import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    .diaryComponent {
        width: 85vw;
        height: 13vh;
        margin: 0.15vh 0;
        display: flex;
        flex-direction: column;
    }

    .diary_dateBox {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 10px;
    }

    .diary_date {
        width: 27vw;
        color: ${theme.colors.secondary_character};
        font-size: 0.9rem;
    }

    .diary_dateBox > hr {
        width: 60vw;
        height: 1px;
        background: ${theme.colors.third_character};
        opacity: 0.2;
        border: 0;
    }

    .diaryBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .diary_img {
        width: 16vw;
        height: 16vw;

        background-color: #f8f7ea;
        border-radius: 10px;
    }

    .diary {
        width: 65vw;
        color: ${theme.colors.secondary_character};
    }

    .diary_title {
        font-size: 1.1rem;
        font-weight: bold;

        display: flex;
        align-items: center;
        margin-bottom: 4px;
    }

    .lockIcon {
        font-size: 0.7rem;
        margin-left: 5px;
    }

    .diary_priview {
        font-size: 1rem;
    }
`;
