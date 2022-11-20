import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";

export const NotFound404 = () => {
  return (
    <>
      <NavBar />
      <Wrapper style={{ minHeight: "100vh" }}>
        <h2>Couldn't find the page you were looking for.</h2>
        <img src="/404.gif" alt="404" style={{ scale: "0.8" }} />
      </Wrapper>
      <Footer />
    </>
  );
};
