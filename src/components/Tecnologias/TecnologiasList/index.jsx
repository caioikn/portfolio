import styled from 'styled-components';
import TecnologiasItem from '../TecnologiasItem';

const StyledList = styled.ul`    
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    text-align: center;

    h3 {
        color: #FFFFFF;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: -1px;
    }

    span {
        color: #D9D9D9;
        line-height: 26px;
    }
`;

export default function TecnologiasList({ tecnologias }) {
    return (
        <StyledList>
            {tecnologias.map((tecnologia, index) => {
                return (
                    <TecnologiasItem key={index} {...tecnologia}/>
                );
            })}
        </StyledList>
    );
}
