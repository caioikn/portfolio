import { StyledBanner, WrapperText } from './Banner.styles';

export default function Banner() {
    return (
        <StyledBanner>
            <img src="https://github.com/caioikn.png" alt="Foto de perfil" />

            <WrapperText>
                <h1>Muito prazer! Eu sou <span>Caio Ikena</span>.</h1>

                <p>Desenvolvedor front-end apaixonado por transformar conceitos visuais em experiências digitais incríveis.</p>                

                <a href="#contato">Contato</a>
            </WrapperText>
        </StyledBanner>
    );
}
