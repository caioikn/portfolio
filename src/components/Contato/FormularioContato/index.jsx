import { useState } from 'react';
import { StyledForm } from './FormularioContato.styles';

export default function FormularioContato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagemNome: '',
        mensagemEmail: ''
    })

    const handleInputChange = (e, campo) => {
        setFormData({
            ...formData,
            [campo]: e.target.value
        });
    }

    const handleFieldFocus = (e, mensagemErroCampo) => {
        const mensagemErro = e.target.parentNode.querySelector(`.${mensagemErroCampo}`);
        const iconeErro = e.target.parentNode.querySelector('.aviso-imagem');

        mensagemErro.textContent = '';
        iconeErro.style.display = 'none';
        e.target.style.borderColor = '#4EE1A0';
    }

    const handleFieldBlur = (e, mensagemCampo, campo) => {
        if (e.target.validity.valueMissing) {
            setFormData({
                ...formData,
                [mensagemCampo]: `Por favor, preencha seu ${campo}`
            });
        }

        if (e.target.validity.typeMismatch) {
            setFormData({
                ...formData,
                [mensagemCampo]: 'Desculpe, formato inválido'
            })
        }

        const mensagemErro = e.target.parentNode.querySelector(`.mensagem-erro-${campo}`);
        const iconeErro = e.target.parentNode.querySelector('.aviso-imagem');
        const validador = e.target.checkValidity();

        if (!validador) {
            mensagemErro.textContent = formData[mensagemCampo];
            mensagemErro.style.display = 'block';
            iconeErro.style.display = 'block';
            e.target.style.borderColor = '#FF6F5B';
        } else {
            mensagemErro.textContent = '';
            iconeErro.style.display = 'none';
            e.target.style.borderColor = '#FFFFFF';
        }
    }

    return (        
        <StyledForm>
            <div className='form-campo'>
                <input 
                    type='text' 
                    placeholder='Nome' 
                    required
                    value={formData.nome}
                    onChange={(e) => handleInputChange(e, 'nome')}
                    onInvalid={(e) => e.preventDefault()}
                    onFocus={(e) => handleFieldFocus(e, 'mensagem-erro-nome')}
                    onBlur={(e) => handleFieldBlur(e, 'mensagemNome', 'nome')}
                />

                <span className='aviso-imagem'>!</span>

                <span className='mensagem-erro-nome'>{formData.mensagemNome}</span>
            </div>

            <div className='form-campo'>
                <input 
                    id='email'
                    type='email' 
                    placeholder='Email' 
                    name='email'
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    onInvalid={(e) => e.preventDefault()}
                    onFocus={(e) => handleFieldFocus(e, 'mensagem-erro-email')}
                    onBlur={(e) => handleFieldBlur(e, 'mensagemEmail', 'email')}
                />

                <span className='aviso-imagem'>!</span>

                <span className='mensagem-erro-email'>{formData.mensagemEmail}</span>
            </div>

            <textarea 
                rows='5' 
                placeholder='Mensagem' 
                name='texto'
                required 
                onInvalid={(e) => e.preventDefault()}
            />

            <button 
                type="submit"
            >
                Enviar Mensagem
            </button>
        </StyledForm>
    );
}
