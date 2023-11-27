import styled from 'styled-components';

const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: -13px;
        text-transform: uppercase;
    }

    h4 {
        color: #D9D9D9;
    }

    .tecnologias {
        display: flex;
        flex-wrap: wrap;
        column-gap: 18px;
    }

    .links {
        display: flex;
        gap: 32px;

        a {
            color: #FFFFFF; 
            cursor: pointer;
            font-weight: 700;
            letter-spacing: 2.286px;
            line-height: 26px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.3s ease-in-out;
            transition: transform 0.3s ease-in-out;

            &:hover {
                color: #4EE1A0;
                transform: translateX(2px);
            }

            &::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: #4EE1A0;
                position: absolute;
                bottom: 0px;
                left: 0px;
            }
        }
    }
`;

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
