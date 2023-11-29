import styled from 'styled-components';

export const StyledSection = styled.section`
    padding: 80px 16px;

    .projetos-titulo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;        

        h2 {
            color: #FFFFFF;
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -1.136px;
            line-height: 100%;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 40px;
        list-style: none;
    }

    @media screen and (min-width: 768px) {
        padding: 0px 30px 100px 30px;

        .projetos-titulo {
            margin-bottom: 60px;

            h2 {
                font-size: 4.5rem;
                letter-spacing: -2.045px;
            }
        }

        ul {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 60px 0px;
            justify-content: space-between;
        }
    }

    @media screen and (min-width: 1440px) {
        padding: 0px 165px 140px 165px;

        .projetos-titulo {
            h2 {
                font-size: 5.5rem;
                letter-spacing: -2.5px;
            }
        }

        ul {
            gap: 70px 0px;
        }
    }
`;
