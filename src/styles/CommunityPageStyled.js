import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 100vw;
    padding-bottom: 10vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }

    .hallOfFame {
        width: 100vw;
        height: 45vh;

        background-color: ${theme.colors.primary};

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .searchBox {
        width: 85vw;
        margin: 3vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .searchBox > p {
        width: 85vw;
        margin: 1vh 0;
        color: ${theme.colors.primary_character};
        font-size: 1.2rem;
        font-weight: bold;
    }

    .searchBox > form {
        width: 85vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .searchInput {
        width: 69vw;
        padding: 1.5vw;

        border-radius: 10px;
        border: 2px solid ${theme.colors.primary_character};
    }

    .searchBtn {
        padding: 1.5vw 2vw;
        background-color: ${theme.colors.primary_character};
        color: white;
        border-radius: 10px;
        border: 2px solid ${theme.colors.primary_character};
    }

    .comm_diaryComponent {
        width: 85vw;
        height: 8vh;

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
        margin-bottom: 10px;
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
