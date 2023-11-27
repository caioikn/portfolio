import styled from "styled-components";
import HeaderNavigation from "./HeaderNavigation";

const StyledHeader = styled.header`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;

    h2 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.333px;
        line-height: 32px;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h2>caioikn</h2>
            <HeaderNavigation />            
        </StyledHeader>
    );
}
