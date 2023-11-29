import styled from 'styled-components';

export const StyledList = styled.ul`    
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    text-align: center;

    h3 {
        color: #FFFFFF;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
        letter-spacing: -1px;
    }

    span {
        color: #D9D9D9;
        line-height: 1.625rem;
    }

    @media screen and (min-width: 768px) {
        align-items: flex-start;
        column-gap: 7px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 52px;
        text-align: start;

        li {
            width: 49%;
        }

        h3 {
            font-size: 3rem;
            line-height: 3.5rem;
            margin-bottom: 14px;
        }

        span {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    }

    @media screen and (min-width: 1440px) {
        column-gap: 30px;
        row-gap: 60px;

        li {
            width: 25%;
        }
    }
`;
