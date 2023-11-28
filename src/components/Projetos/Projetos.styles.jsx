import styled from 'styled-components';

export const StyledSection = styled.section`
    padding: 80px 16px;

    h2 {
        color: #FFFFFF;
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: -1.136px;
        line-height: 2.5rem;
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 40px;
        list-style: none;
    }

    @media screen and (min-width: 768px) {
        padding: 0px 30px 100px 30px;

        h2 {
            font-size: 4.5rem;
            line-height: 4.5rem;
            letter-spacing: -2.045px;
            margin-bottom: 60px;
        }

        ul {
            flex-direction: row;
            flex-wrap: wrap;
            row-gap: 60px;
            column-gap: 20px;
        }
    }
`;
