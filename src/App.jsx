import styled from 'styled-components';
import Cabecalho from './components/Header'
import Banner from './components/Banner';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import Contato from './components/Contato';

const Wrapper = styled.div`
    background-color: #151515;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    min-height: 100vh;
    width: 100%;
`;

function App() {
    return (    
        <Wrapper>
            <Cabecalho />
            <Banner />
            <Tecnologias />
            <Projetos />
            <Contato />
            <Footer />
        </Wrapper>
    )
}

export default App;
