import styled from 'styled-components';

export const StyledSection = styled.section`
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    margin: 0px 16px;
    padding: 40px 0px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 530px;
        height: 129px;
        background-image: url('images/pattern-rings.svg');
        right: -344px;
    }

    @media screen and (min-width: 768px) {
        border-bottom: 0px;
        margin: 0px 30px;
        padding: 52px 0px 100px 0px;

        &::after {
            top: 56%;
        }
    }

    @media screen and (min-width: 1440px) {
        margin: 0px 165px;
        padding: 72px 0px 140px 0px;

        &::after {
            top: 38%;
        }
    }
`;
