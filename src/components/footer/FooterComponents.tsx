import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #24283a;
  color: #fff;
  height: 4rem;
  font-size: 1.2rem;
  font-weight: 700;
  z-index: 10;
  width: 100%;
  bottom: 0;
  left: 0;
  user-select: none;
  transition: background-color 0.5s, height 0.5s;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FooterLink = styled.a`
  color: #fff;
  cursor: pointer;
  width: 100%;
  text-align: center;
  max-width: 150px;
  text-decoration: none;
  transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    color: #fe5573;
    text-shadow: 0 0 5px #fe5573ed, 0 0 10px #fe5573ed, 0 0 20px #fe5573ed;
  }
`;
