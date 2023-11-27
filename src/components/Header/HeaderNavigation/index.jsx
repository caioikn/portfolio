import styled from 'styled-components';
import SocialMediaLink from '../SocialMediaLink';

const StyledItem = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    gap: 20px;
`;

export default function HeaderNavigation() {
    return (
        <nav>
            <StyledItem>
                <SocialMediaLink href='https://github.com/caioikn' icon='/images/icon-github.svg' alt='GitHub' />
                <SocialMediaLink href='https://www.frontendmentor.io/profile/caioikn' icon='/images/icon-frontend-mentor.svg' alt='Frontend Mentor' />
                <SocialMediaLink href='https://www.linkedin.com/in/caioikena/' icon='/images/icon-linkedin.svg' alt='LinkedIn' />
                <SocialMediaLink href='https://twitter.com/iknzin' icon='/images/icon-twitter.svg' alt='Twitter' />
            </StyledItem>
        </nav>
    );
}
