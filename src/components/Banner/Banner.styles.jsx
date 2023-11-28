import styled from 'styled-components';

export const StyledBanner = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px 16px 80px 16px;
    position: relative;

    img {
        filter: grayscale(100%);
        height: 242px;
        object-fit: cover;
        width: 60%;
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
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -1.136px;
        line-height: 40px;
        text-align: center;

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
`;
