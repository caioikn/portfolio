import { StyledForm } from './FormularioContato.styles';

export default function FormularioContato() {
    return (        
        <StyledForm>
            <input type="text" placeholder="Nome" />

            <div className='form-email'>
                <input type="email" placeholder="Email" />
                <span>Desculpe, formato inválido</span>
            </div>

            <textarea rows="5" placeholder="Mensagem" />

            <button type="submit">Enviar Mensagem</button>
        </StyledForm>
    );
}
