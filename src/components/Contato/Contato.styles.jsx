import styled from 'styled-components';

export const StyledSection = styled.section`
    background-color: #242424;
    padding: 60px 16px 90px 16px;
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

    &::after {
        background-color: #FFFFFF;
        bottom: 0px;
        content: '';
        display: block;
        height: 1px;
        margin: 0 auto;
        position: absolute;
        width: 90%;
    }

    .contato-texto {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 50px;

        h2 {
            color: #FFFFFF;
            font-size: 40px;
            font-weight: 700;
            letter-spacing: -1.136px;
            line-height: 40px;
        }

        p {
            color: #D9D9D9;
            text-align: center;
            line-height: 26px;
        }
    }
`;
