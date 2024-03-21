import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 100vw;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0;
    }

    .mypage {
        width: 100vw;
        height: 9vh;
        padding: 3vh 0;
        background-color: ${theme.colors.primary};

        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        color: ${theme.colors.secondary};
    }

    .hello {
        font-size: 0.9rem;
    }

    .username {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.3rem;
        font-weight: bold;
    }

    .editIcon {
        font-size: 0.8rem;
        margin-left: 1rem;
    }

    .point {
        font-size: 1rem;
    }

    .today {
        width: 85vw;
        margin: 4vh 0 1vh 0;

        color: ${theme.colors.primary_character};
        font-size: 1.3rem;
        font-weight: bold;
    }

    .link {
        margin: 0.8vh 0;
    }
`;
