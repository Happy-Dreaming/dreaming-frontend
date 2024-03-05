import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 100vw;
    padding-bottom: 10vh;

    p {
        margin: 0;
    }

    .searchBox {
        width: 100vw;
        padding: 2vh 0;
        /* margin: 3vh 0; */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: ${theme.colors.primary};
    }

    .searchBox > p {
        width: 85vw;
        margin: 1vh 0;
        color: ${theme.colors.secondary};
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
        border: 2px solid ${theme.colors.secondary};
    }

    .searchBtn {
        padding: 1.5vw 2vw;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border-radius: 10px;
        border: 2px solid ${theme.colors.secondary};
    }

    .categoryBox {
        width: 100vw;
        margin: 3vh 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
    }

    .categoryTitle {
        width: 85vw;
        font-size: 1rem;
        font-weight: bold;
        color: ${theme.colors.primary_character};
    }

    .categories {
        width: 85vw;
        margin-top: 1vh;
        display: flex;
        flex-shrink: 0;
        overflow-y: scroll;
        /* border-bottom: 1.5px solid ${theme.colors.primary}; */
    }

    .category {
        padding: 0.5vw 3vw;
        font-size: 0.9rem;
        flex-shrink: 0;

        color: ${theme.colors.primary_character};
    }

    .category:not(:last-of-type) {
        border-right: 1px solid #f8f7ea;
    }

    .dreamBox {
        width: 100vw;
        height: 58vh;
        margin-top: 4vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;
