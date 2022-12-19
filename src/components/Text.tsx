import styled from "styled-components";
import { DeviceSize } from "../utils/responsive";

let boxColor = "#fe5573";

export const TextBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 1.4rem;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 1rem;
  background-color: #363d57;
  box-shadow: 1px 1px 0px ${boxColor}, 2px 2px 0px ${boxColor},
    3px 3px 0px ${boxColor}, 4px 4px 0px ${boxColor}, 5px 5px 0px ${boxColor},
    6px 6px 0px ${boxColor};

  @media (max-width: ${DeviceSize.mobile}px) {
    display: block;
    font-size: 1.3rem;
  }
`;
