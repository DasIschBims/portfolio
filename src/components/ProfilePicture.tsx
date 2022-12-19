import styled from "styled-components";
import { DeviceSize } from "../utils/responsive";

export const ProfilePicture = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50px;
  object-fit: cover;
  object-position: center;
  margin: 1rem;

  @media (max-width: ${DeviceSize.mobile}px) {
    display: none;
  }
`;

export const ProfilePictureMobile = styled.img`
  width: 85%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;
  object-position: center;
  margin: 1rem 0;

  @media (min-width: ${DeviceSize.mobile}px) {
    display: none;
  }
`;
