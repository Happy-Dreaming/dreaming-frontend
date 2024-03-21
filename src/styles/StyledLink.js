import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    color: ${(props) => (props.color ? props.color : "black")};
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: ${(props) => (props.color ? props.color : "black")};
    }
`;
