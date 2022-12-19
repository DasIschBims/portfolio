import { Link } from "react-router-dom";
import styled from "styled-components";
import { DeviceSize } from "../../utils/responsive";

export const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: ${DeviceSize.mobile}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HamburgerList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const HamburgerNavItem = styled(Link)`
  display: none;
  color: #fff;
  text-decoration: none;
  margin .8rem 0;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: ${DeviceSize.mobile}px) {
    display: flex;
  }
`;

export const HamburgerNavMenu = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  background-color: #363d57;
  width: 100vw;
  display: flex;
  transform: translateX(+100%);
  transition: transform 0.2s ease-in-out;
  z-index: 10;
  border-bottom: 5px solid #fe5573;
  border-top: 5px solid #fe5573;

  @media (max-width: ${DeviceSize.mobile}px) {
    align-items: center;
    justify-content: center;
  }
`;
