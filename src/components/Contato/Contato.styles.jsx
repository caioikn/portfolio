import styled from 'styled-components';

export const StyledSection = styled.section`
    background-color: #242424;
    padding: 60px 16px 0px 16px;
    position: relative;
    width: 100%;

    &::before {
        background-image: url('images/pattern-rings.svg');
        background-repeat: no-repeat;
        top: 468px;
        left: -343px;
        content: '';
        position: absolute;
        width: 530px;
        height: 129px;
    }

    .container-interno {
        border-bottom: 1px solid #FFFFFF;
        padding-bottom: 90px;
    }

    .contato-texto {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 50px;

        h2 {
            color: #FFFFFF;
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -1.136px;
            line-height: 100%;
        }

        p {
            color: #D9D9D9;
            text-align: center;
            line-height: 1.625rem;
        }
    }

    @media screen and (min-width: 768px) {
        padding: 60px 0px 90px 0px;

        &::before {
            top: 547px;
            left: -368px;
        }

        .container-interno {
            margin: 0px 30px;
        }

        .contato-texto {
            margin: 0 auto 48px auto;
            width: 60%;

            h2 {
                font-size: 4.5rem;
                letter-spacing: -2.045px;
            }

            p {
                font-size: 1.125rem;
                line-height: 1.75rem;
            }
        }
    }

    @media screen and (min-width: 1440px) {
        padding: 85px 0px 0px 0px;

        &::before {
            left: -205px;
            top: 327px;
        }

        .container-interno {
            display: flex;
            gap: 220px;
            max-width: 1110px;
            border-bottom: 1px solid #FFFFFF;
            margin: 0px auto;
        }

        .contato-texto {
            align-items: flex-start;
            margin: 0px;

            h2 {
                font-size: 5.5rem;
            }

            p {
                text-align: start;
            }
        }
    }
`;
