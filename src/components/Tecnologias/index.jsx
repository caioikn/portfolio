import { StyledSection } from './Tecnologias.styles';
import TecnologiasList from './TecnologiasList';

export default function Tecnologias() {
    const tecnologias = [
        { nome: 'HTML', experiencia: '5 meses de experiência' },
        { nome: 'CSS', experiencia: '5 meses de experiência' },
        { nome: 'JavaScript', experiencia: '5 meses de experiência' },
        { nome: 'React.js', experiencia: '5 meses de experiência' },
        { nome: 'Sass/SCSS', experiencia: '5 meses de experiência' }, 
        { nome: 'Styled Components', experiencia: '2 meses de experiência' },
        { nome: 'MySQL', experiencia: '3 anos de experiência' }, 
    ];

    return (
        <StyledSection>
            <TecnologiasList tecnologias={tecnologias} />
        </StyledSection>
    );
}
