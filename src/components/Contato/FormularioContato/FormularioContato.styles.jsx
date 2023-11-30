import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;

    input {
        background: transparent;
        border: none;
        border-bottom: 1px solid #FFFFFF;
        color: #FFFFFF;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 16px;
        line-height: 26px;
        padding-bottom: 17px;
        padding-left: 24px;
        /* transition: border-bottom 0.3s ease-in-out; */

        &:focus {
            border-bottom: 1px solid #4EE1A0;
            outline: none;
        }

        &::placeholder {
            text-transform: uppercase;
        }
    }

    textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid #FFFFFF;
        color: #FFFFFF;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 16px;
        padding-left: 24px;
        resize: none;
        transition: border-bottom 0.3s ease-in-out;

        &:focus {
            border-bottom: 1px solid #4EE1A0;
            outline: none;
        }

        &::placeholder {
            text-transform: uppercase;
        }

        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #D4D4D4;
            border-radius: 6px;
        }
    }

    button {
        align-self: flex-end;
        background: transparent;
        border: none;
        border-bottom: 2px solid #4EE1A0;
        color: #FFFFFF;
        cursor: pointer;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 2.286px;
        line-height: 26px;
        padding-bottom: 10px;
        text-transform: uppercase;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #4EE1A0;
        }
    }

    .form-campo {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        .mensagem-erro-nome,
        .mensagem-erro-email {
            align-self: flex-end;
            color: #FF6F5B;
            display: none;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: -0.167px;
            position: absolute;
            top: 110%;
        }

        .aviso-imagem {
            border: 1px solid #FF6F5B;
            border-radius: 50%;
            content: '!';
            color: #FF6F5B;
            display: none;
            padding: 2px 10px;
            position: absolute;
            right: 0px;
        }
    }

    @media screen and (min-width: 768px) {
        margin: 0 auto;
        width: 60%;
    }
`;