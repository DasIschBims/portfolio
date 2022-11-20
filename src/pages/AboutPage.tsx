import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";

export const AboutPage = () => {
  return (
    <>
      <NavBar />
      <Wrapper
        style={{
          minHeight: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "70vw",
        }}
      >
        <p>coming soon...</p>
        <p>about</p>
      </Wrapper>
      <Footer />
    </>
  );
};
