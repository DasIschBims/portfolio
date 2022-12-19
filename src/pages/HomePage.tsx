import { Footer } from "../components/Footer";
import { HamburgerMenu } from "../components/Hamburger";
import { NavBar } from "../components/NavBar";
import {
  ProfilePicture,
  ProfilePictureMobile,
} from "../components/ProfilePicture";
import { TextBox } from "../components/Text";
import { Wrapper } from "../components/Wrapper";

export const HomePage = () => {
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
        <TextBox>
          Hey there! I'm a self taught german developer that does some coding in
          his spare time.
          <br />
          <br />
          I'm familiar with Javascript, Typescript, Java, Kotlin and a little
          bit of C#.
          <br />
          <ProfilePictureMobile src="/profile-picture.png" />
          <br />
          Feel free to check out my socials or my projects on github via the
          link in the navbar.
          <br />
          <ProfilePicture src="/profile-picture.png" />
        </TextBox>
      </Wrapper>
      <Footer />
    </>
  );
};
