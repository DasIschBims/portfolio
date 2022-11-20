import { Turn as Hamburger } from "hamburger-react";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import {
  HamburgerButton,
  HamburgerButtonWrapper,
  NavHamburgerWrapper,
} from "./nav/HamburgerComponents";

export const HamburgerMenu = () => {
  return (
    <NavHamburgerWrapper>
      <HamburgerButtonWrapper id="hamburger-button-wrapper">
        <HamburgerButton to="/">
          <FaHome />
        </HamburgerButton>
        <HamburgerButton to="/about">
          <FaUser />
        </HamburgerButton>
        <HamburgerButton to="/projects">
          <FaProjectDiagram />
        </HamburgerButton>
      </HamburgerButtonWrapper>
      <div
        style={{
          backgroundColor: "#fe5573",
          boxShadow:
            "0 0 5px #fe5573ed, 0 0 10px #fe5573ed, 0 0 20px #fe5573ed",
          borderRadius: "30%",
          padding: "0.5rem",
        }}
      >
        <Hamburger
          color="#282c34"
          rounded
          direction="right"
          easing="ease-in-out"
          duration={0.3}
          onToggle={(toggled) => {
            if (toggled) {
              document.getElementById("blur-wrapper")!.style.display = "block";
              document.getElementById(
                "hamburger-button-wrapper"
              )!.style.display = "flex";
              setTimeout(() => {
                document.getElementById("blur-wrapper")!.style.opacity = "1";
                document.getElementById(
                  "hamburger-button-wrapper"
                )!.style.opacity = "1";
              }, 10);
            } else {
              document.getElementById("blur-wrapper")!.style.opacity = "0";
              document.getElementById(
                "hamburger-button-wrapper"
              )!.style.opacity = "0";
              setTimeout(() => {
                document.getElementById("blur-wrapper")!.style.display = "none";
                document.getElementById(
                  "hamburger-button-wrapper"
                )!.style.display = "none";
              }, 300);
            }
          }}
        />
      </div>
    </NavHamburgerWrapper>
  );
};
