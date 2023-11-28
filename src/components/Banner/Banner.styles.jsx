import styled from 'styled-components';

export const StyledBanner = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px 16px 80px 16px;
    position: relative;

    &::before {
        background-image: url('/images/pattern-rings.svg');
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
        height: 129px;
        left: -90%;
        position: absolute;
        top: 7%;
        width: 530px;
    }

    &::after {        
        background-image: url('/images/pattern-circle.svg');
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
        height: 129px;
        right: -65px;
        position: absolute;
        top: 162px;
        width: 129px;
    }

    img {
        filter: grayscale(100%);
        height: 242px;
        object-fit: cover;
        width: 174px;
    }

    @media screen and (min-width: 768px) {
        align-items: start;
        flex-direction: row-reverse;
        gap: 0px;
        padding: 90px 0px 60px 30px;

        img {
            margin-top: -30px;
            height: 486px;
            width: 322px;
        }

        &::before {
            left: -265px;
            top: 25px;
        }

        &::after {        
            right: -65px;
            top: 413px;
        }
    }
`;

export const WrapperText = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;

    h1 {
        color: #FFFFFF;
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: -1.136px;
        line-height: 100%;

        span {
            position: relative;

            &::after {
                background-color: #4EE1A0;
                bottom: 0px;
                content: '';
                height: 4px;
                left: 0px;
                position: absolute;
                width: 100%;
            }
        }
    }

    p {
        color: #D9D9D9;
        line-height: 26px;
    }

    a {
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
    }

    @media screen and (min-width: 768px) {
        align-items: flex-start;
        gap: 0px;
        text-align: start;
        position: absolute;
        left: 30px;
        width: 70%;

        h1 {
            font-size: 4.5rem;
            letter-spacing: -2.045px;
            margin-bottom: 66px;
        }

        p {
            margin-bottom: 34px;
            width: 85%;
        }
    }
`;
