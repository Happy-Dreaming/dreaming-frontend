import React from "react";
import { Container } from "../styles/MainPageStyled.js";
import LinkToDiary from "../components/LinkToDiary.js";
import HallOfFrame from "../components/HallOfFame.js";

function MainPage() {
    return (
        <Container>
            <div className="banner">Banner</div>
            <div className="diary">
                <LinkToDiary />
            </div>
            <div className="award">
                <HallOfFrame page="main" />
            </div>
        </Container>
    );
}

export default MainPage;
