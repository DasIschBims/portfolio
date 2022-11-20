import { Footer } from "../components/Footer";
import { HamburgerMenu } from "../components/Hamburger";
import { BlurWrapper } from "../components/nav/HamburgerComponents";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";

export const ProjectsPage = () => {
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
        <p>projects</p>
      </Wrapper>
      <Footer />
    </>
  );
};
