import { Footer } from "../components/Footer";
import { HamburgerMenu } from "../components/Hamburger";
import {
  BlurWrapper,
  HamburgerButton,
  HamburgerButtonWrapper,
} from "../components/nav/HamburgerComponents";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <HamburgerMenu />
      <BlurWrapper id="blur-wrapper" />
      <Wrapper
        style={{
          minHeight: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "70vw",
        }}
      >
        <p>coming soon...</p>
        <p>home</p>
      </Wrapper>
      <Wrapper
        style={{
          minHeight: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "70vw",
        }}
      />
      <Footer />
    </>
  );
};
