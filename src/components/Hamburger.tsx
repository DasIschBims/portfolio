import { Turn as Hamburger } from "hamburger-react";
import {
  HamburgerWrapper,
  HamburgerNavItem,
  HamburgerNavMenu,
  HamburgerList,
} from "./nav/NavHamburgerComponents";

export const HamburgerMenu = () => {
  return (
    <HamburgerWrapper>
      <Hamburger
        color="#fff"
        rounded
        direction="left"
        easing="ease-in-out"
        duration={0.3}
        onToggle={(toggled) => {
          const hamburgerNavMenu = document.getElementById(
            "hamburger-nav-menu"
          ) as HTMLElement;
          if (toggled) {
            hamburgerNavMenu.style.transform = "translateX(0)";
          } else {
            hamburgerNavMenu.style.transform = "translateX(+100%)";
          }
        }}
      />
      <HamburgerNavMenu id="hamburger-nav-menu">
        <HamburgerList>
          <HamburgerNavItem to="/">Home</HamburgerNavItem>
          <HamburgerNavItem to="/socials">Socials</HamburgerNavItem>
        </HamburgerList>
      </HamburgerNavMenu>
    </HamburgerWrapper>
  );
};
