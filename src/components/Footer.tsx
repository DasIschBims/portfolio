import {
  FooterWrapper,
  FooterContent,
  FooterLink,
} from "./footer/FooterComponents";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLink href="https://github.com/DasIschBims/portfolio">
          Repository
        </FooterLink>
      </FooterContent>
    </FooterWrapper>
  );
};
