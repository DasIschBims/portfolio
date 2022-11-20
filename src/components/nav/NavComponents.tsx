import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DeviceSize } from "../responsive";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: transparent;
  color: #fff;
  height: 5rem;
  font-size: 1.2rem;
  font-weight: 700;
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  user-select: none;
  transition: background-color 0.5s, height 0.5s;

  @media (max-width: ${DeviceSize.mobile}px) {
    padding: 0 1rem;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    color: #fe5573;
    text-shadow: 0 0 10px #fe5573ed, 0 0 20px #fe5573ed, 0 0 40px #fe5573ed;
  }

  @media (max-width: ${DeviceSize.mobile}px) {
    font-size: 1.2rem;
  }
`;

export const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    color: #fe5573;
    text-shadow: 0 0 5px #fe5573ed, 0 0 10px #fe5573ed, 0 0 20px #fe5573ed;
  }

  @media (max-width: ${DeviceSize.mobile}px) {
    display: none;
  }
`;
