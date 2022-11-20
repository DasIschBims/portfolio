import { Link } from "react-router-dom";
import styled from "styled-components";
import { DeviceSize } from "../responsive";

export const NavHamburgerWrapper = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  padding: 0.5rem;
  border-radius: 30%;
  z-index: 100;
`;

export const BlurWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000a6;
  backdrop-filter: blur(0.075rem);
  z-index: 99;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const HamburgerButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 100;

  @media (max-width: ${DeviceSize.mobile}px) {
    display: none;
  }
`;

export const HamburgerButton = styled(Link)`
  border: none;
  display: block;
  outline: none;
  cursor: pointer;
  color: #282c34;
  background-color: #fe5573;
  border-radius: 30%;
  font-size: 3rem;
  padding: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 0 5px #fe5573ed, 0 0 10px #fe5573ed, 0 0 20px #fe5573ed;
  z-index: 100;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #fe5573;
  }
  svg {
    scale: 0.8;
  }
`;
