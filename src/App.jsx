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
    overflow-x: hidden;
    width: 100%;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
`;

function App() {
    return (    
        <Wrapper>
            <Container>
                <Cabecalho />
                <Banner />
                <Tecnologias />
                <Projetos />
            </Container>

            <Contato />
            <Footer />
        </Wrapper>
    )
}

export default App;
