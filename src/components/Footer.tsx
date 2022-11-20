import {
  FooterWrapper,
  FooterContent,
  FooterLink,
} from "./footer/FooterComponents";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLink
          onClick={() =>
            (window.location.href = "https://github.com/DasIschBims/portfolio")
          }
        >
          Repository
        </FooterLink>
        <FooterLink
          onClick={() => (window.location.href = "https://dasischbims.social")}
        >
          Socials
        </FooterLink>
      </FooterContent>
    </FooterWrapper>
  );
};
