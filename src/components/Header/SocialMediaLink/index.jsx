import { StyledItem } from "./SocialMediaLink.styles";

export default function SocialMediaLink({ href, children }) {
    return (
        <StyledItem>
            <a href={href} target="_blank">
                {/* <img src={icon} alt={alt} /> */}
                {children}
            </a>
        </StyledItem>
    );
}
