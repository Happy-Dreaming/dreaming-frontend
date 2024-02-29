import React from "react";
import { Container } from "../styles/NavbarStyled.js";
import { StyledLink } from "../styles/StyledLink.js";
import theme from "../styles/theme";

function Navbar() {
    return (
        <Container>
            <StyledLink to="/main" color={theme.colors.secondary}>
                <div className="menu1">
                    <div className="menuIcon">🖤</div>
                    Main
                </div>
            </StyledLink>
            <StyledLink to="/diary" color={theme.colors.secondary}>
                <div className="menu1">
                    <div className="menuIcon">🖤</div>
                    Diary
                </div>
            </StyledLink>
            <StyledLink to="/community" color={theme.colors.secondary}>
                <div className="menu1">
                    <div className="menuIcon">🖤</div>
                    Comm
                </div>
            </StyledLink>
            <StyledLink to="/dictionary" color={theme.colors.secondary}>
                <div className="menu1">
                    <div className="menuIcon">🖤</div>
                    Dict
                </div>
            </StyledLink>
            <StyledLink to="/lottoMap" color={theme.colors.secondary}>
                <div className="menu1">
                    <div className="menuIcon">🖤</div>
                    Lotto
                </div>
            </StyledLink>
        </Container>
    );
}

export default Navbar;
