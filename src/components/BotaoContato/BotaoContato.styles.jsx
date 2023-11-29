import styled from "styled-components";

export const StyledButton = styled.a`
    color: #FFFFFF;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 2.286px;
    padding-bottom: 10px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;

    &::after {
        background-color: #4EE1A0;
        bottom: 0px;
        content: '';
        height: 2px;
        left: 0px;
        position: absolute;
        width: 100%;
    }

    &:hover {
        color: #4EE1A0;
    }
`;
