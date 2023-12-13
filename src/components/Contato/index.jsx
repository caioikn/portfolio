import { StyledSection } from './Contato.styles';
import FormularioContato from './FormularioContato';

export default function Contato() {
    return (
        <StyledSection id='contato'>
            <div className='container-interno'>
                <div className='contato-texto'>
                    <h2>Contato</h2>
                    <p>Adoraria ouvir sobre seu projeto e em como eu poderia ajudar. Por favor, envie seu e-mail ou me ligue.</p>
                </div>

                <div className='contato-lista'>
                    <div className='email'>
                        <img src="./images/envelope-fill.svg" alt="E-mail" />
                        <p>caioikena@gmail.com</p>
                    </div>

                    <div className='telefone'>
                        <img src="./images/telephone-fill.svg" alt="Telefone" />
                        <p>(11) 99809-5645</p>
                    </div>
                </div>

                {/* <FormularioContato /> */}
            </div>
        </StyledSection>
    );
}
