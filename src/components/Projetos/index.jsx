import styled from 'styled-components';
import ProjetosItem from './ProjetosItem';

const StyledSection = styled.section`
    padding: 80px 16px;

    h2 {
        color: #FFFFFF;
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -1.136px;
        line-height: 40px;
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 40px;
        list-style: none;
    }
`;

const projetosData = [
    {
        imgSrc: './src/components/Projetos/images/calculadora-imc.jpg',
        alt: 'Tela do aplicativo de calculadora de IMC',
        title: 'Calculador de IMC',
        techs: ['HTML', 'CSS', 'JavaScript'],
        projetoLink: 'https://calculadora-imc-three-bay.vercel.app/',
        codeLink: 'https://github.com/caioikn/calculadora-imc'
    },
    {
        imgSrc: './src/components/Projetos/images/meet-landing-page.jpg',
        alt: 'Tela da landing page',
        title: 'Meet - Landing Page',
        techs: ['HTML', 'CSS', 'Sass/SCSS'],
        projetoLink: 'https://caioikn.github.io/meet/',
        codeLink: 'https://github.com/caioikn/meet'
    }
];

export default function Projetos() {
    return (
        <StyledSection>
            <h2>Projetos</h2>

            <ul>
                {projetosData.map((projeto, index) => {
                    return (
                        <ProjetosItem key={index} {...projeto} />
                    );
                })}
            </ul>
        </StyledSection>
    );
}