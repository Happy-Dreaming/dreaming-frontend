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

    .titleBox {
        width: 100vw;
        padding: 4vh 0;

        background-color: ${theme.colors.primary};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        width: 85vw;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 1vw;
        color: ${theme.colors.secondary};
    }

    .subTitle {
        width: 85vw;
        color: ${theme.colors.secondary};
        font-size: 0.8rem;
        margin-bottom: 0.5vw;
    }

    .userName {
        width: 60vw;
        margin-top: 8vh;
        font-size: 1.35rem;
        font-weight: bold;
        color: ${theme.colors.secondary_character};
    }

    .lottoBox {
        margin: 7vh 0;
    }

    .lottos {
        width: 70vw;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .lotto {
        width: 20vw;
        height: 20vw;
        margin: 1.5vw;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 2rem;
        font-weight: bold;
        color: ${theme.colors.secondary_character};

        background-color: ${theme.colors.secondary};
    }

    .bonusLotto {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bonus {
        font-size: 1rem;
        margin-right: 2vw;
        color: ${theme.colors.secondary_character};
    }

    .recommendBtn {
        width: 27vw;
        padding: 3vw;
        font-size: 1.2rem;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${theme.colors.primary};
        color: ${theme.colors.primary_character};
        border-radius: 15px;
    }
`;
