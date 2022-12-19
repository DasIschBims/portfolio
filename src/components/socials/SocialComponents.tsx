import styled from "styled-components";
import { DeviceSize } from "../../utils/responsive";

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 40vw;
  padding: 1rem;
  @media screen and (max-width: ${DeviceSize.mobile}px) {
    padding: 0.5rem;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: #363d57;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #fe5573;
    color: #fff;
    text-decoration: none;
  }
  &:not(:first-child) {
    margin-left: 1rem;
  }
  @media screen and (max-width: ${DeviceSize.mobile}px) {
    font-size: 1.2rem;

    &:not(:first-child) {
      margin-left: 0rem;
      margin-top: 0.5rem;
    }

    &:first-child {
      margin-top: 1rem;
    }
  }
`;

export const SocialText = styled.p`
  margin: 0.8rem 0.8rem 0.8rem 0;
  font-size: 1.5rem;
  @media screen and (max-width: ${DeviceSize.mobile}px) {
    font-size: 1.2rem;
  }
`;

export const SocialImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0.8rem;
  filter: invert(1);
`;
