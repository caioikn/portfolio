import BotaoContato from '../BotaoContato';
import { StyledBanner, WrapperText } from './Banner.styles';

export default function Banner() {
    return (
        <StyledBanner>
            <img src="https://github.com/caioikn.png" alt="Foto de perfil" />

            <WrapperText>
                <h1>Prazer em conhecer você! Eu sou o <span>Caio</span>.</h1>

                <p>Desenvolvedor front-end apaixonado por transformar conceitos visuais em experiências digitais incríveis.</p>                

                <BotaoContato />
            </WrapperText>
        </StyledBanner>
    );
}
