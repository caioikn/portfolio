import { StyledList } from './TecnologiasList.styles';
import TecnologiasItem from '../TecnologiasItem';

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
