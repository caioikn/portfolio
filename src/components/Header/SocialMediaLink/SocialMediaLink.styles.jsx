import styled from 'styled-components';

export const StyledItem = styled.li`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-3px);
    }

    a svg path {        
        transition: fill 0.3s ease-in-out;
    }

    a svg:hover path {
        fill: #4EE1A0;
    }
`;
