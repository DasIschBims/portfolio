import { useEffect } from "react";
import { Nav, NavItem, NavLogo } from "./nav/NavComponents";
import { HamburgerMenu } from "./Hamburger";

export const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (
        (window.scrollY > 100 || window.scrollY > window.innerHeight / 10) &&
        nav
      ) {
        nav.style.cssText = `
          background-color: #24283a;
          height: 4rem;
        `;
      } else if (nav) {
        nav.style.cssText = `
          background-color: #00000080;
          height: 5rem;
        `;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Nav>
      <NavLogo to="/">
        <span>DasIschBims</span>
      </NavLogo>
      <ul>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/socials">Socials</NavItem>
      </ul>
      <HamburgerMenu />
    </Nav>
  );
};
