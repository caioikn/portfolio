import styled from 'styled-components';

export const StyledSection = styled.section`
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    margin: 0px 16px;
    padding: 40px 0px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 530px;
        height: 129px;
        background-image: url('images/pattern-rings.svg');
        right: -344px;
    }
`;
