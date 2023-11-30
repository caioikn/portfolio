import BotaoContato from '../BotaoContato';
import { StyledSection } from './Projetos.styles';
import ProjetosItem from './ProjetosItem';

const projetosData = [
    {
        imgSrc: '/src/components/Projetos/images/calculadora-imc.jpg',
        alt: 'Tela do aplicativo de calculadora de IMC',
        title: 'Calculador de IMC',
        techs: ['HTML', 'CSS', 'JavaScript'],
        projetoLink: 'https://calculadora-imc-three-bay.vercel.app/',
        codeLink: 'https://github.com/caioikn/calculadora-imc'
    },
    {
        imgSrc: './images/meet-landing-page.jpg',
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
            <div className='projetos-titulo'>
                <h2>Projetos</h2>

                <BotaoContato />
            </div>

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