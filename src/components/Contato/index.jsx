import { StyledSection } from './Contato.styles';
import FormularioContato from './FormularioContato';

export default function Contato() {
    return (
        <StyledSection id='contato'>
            <div className='contato-texto'>
                <h2>Contato</h2>
                <p>Adoraria ouvir sobre seu projeto e em como eu poderia ajudar. Por favor, preencha o formulário e irei retornar assim que possível.</p>
            </div>

            <FormularioContato />
        </StyledSection>
    );
}
