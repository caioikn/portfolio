import { StyledItem } from './ProjetosItem.styles';

export default function ProjetosItem({ imgSrc, alt, title, techs, projetoLink, codeLink }) {
    return (
        <StyledItem>
            <img src={imgSrc} alt={alt} />
            
            <h3>{title}</h3>

            <div className='tecnologias'>      
                {techs.map((tech, index) => {
                    return (
                        <h4 key={index}>{tech}</h4>
                    );
                })}
            </div>

            <div className='links'>
                <a href={projetoLink} target='_blank'>Ver Projeto</a>
                <a href={codeLink} target='_blank'>Ver Código</a>
            </div>
        </StyledItem>
    );
}
