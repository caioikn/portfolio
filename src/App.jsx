import styled from 'styled-components';
import './reset.css';
import Cabecalho from './components/Header'
import Banner from './components/Banner';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';

const EstilosGlobais = styled.div`
    background-color: #151515;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    min-height: 100vh;
    width: 100%;
`;

function App() {
    return (    
        <EstilosGlobais>
            <Cabecalho />
            <Banner />
            <Tecnologias />
            <Projetos />
        </EstilosGlobais>
    )
}

export default App;
