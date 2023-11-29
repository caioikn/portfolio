import styled from 'styled-components';

export const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: -13px;
        text-transform: uppercase;
    }

    h4 {
        color: #D9D9D9;
    }

    .tecnologias {
        display: flex;
        flex-wrap: wrap;
        column-gap: 18px;
    }

    .links {
        display: flex;
        gap: 32px;

        a {
            color: #FFFFFF; 
            cursor: pointer;
            font-weight: 700;
            letter-spacing: 2.286px;
            line-height: 26px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.3s ease-in-out;
            transition: transform 0.3s ease-in-out;

            &:hover {
                color: #4EE1A0;
                transform: translateX(2px);
            }

            &::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: #4EE1A0;
                position: absolute;
                bottom: 0px;
                left: 0px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        justify-content: space-between;
        width: 48%;
    }

    @media screen and (min-width: 1440px) {
        max-width: 525.59px;
        
        img {
            cursor: pointer;
            max-width: 100%;

            &:hover ~ .links {
                background-color: #000000;
                display: flex;
                flex-direction: column;
                height: 385.42px;
                opacity: 0.75;
                position: absolute;
                width: 525.59px;
                z-index: 1;
                flex-grow: 1;
            }
        }

        .links {
            align-items: center;
            cursor: pointer;
            display: none;
            flex-direction: column;
            gap: 60px;
            justify-content: center;

            &:hover {
                background-color: #000000;
                display: flex;
                height: 385.42px;
                opacity: 0.75;
                position: absolute;
                width: 525.59px;
                z-index: 1;
            }

            a {
                &:hover {
                    transform: translateY(-3px);
                }
            }
        }
    }
`;
