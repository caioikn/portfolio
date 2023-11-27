import styled from 'styled-components';

const StyledItem = styled.li`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-3px);
    }
`;

export default function SocialMediaLink({ href, icon, alt }) {
    return (
        <StyledItem>
            <a href={href} target="_blank">
                <img src={icon} alt={alt} />
            </a>
        </StyledItem>
    );
}
