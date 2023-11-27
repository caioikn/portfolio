import styled from 'styled-components';
import TecnologiasList from './TecnologiasList';

const StyledSection = styled.section`
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    margin: 0px 16px;
    padding: 40px 0px;
`;

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
