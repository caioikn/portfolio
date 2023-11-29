import styled from 'styled-components';

export const StyledHeader = styled.header`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.333px;
        line-height: 2rem;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 30px 30px 0px 30px;

        h2 {
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 1440px) {
        padding: 40px 160px 0px 160px;
    }
`;
