import { Footer } from "../components/Footer";
import { HamburgerMenu } from "../components/Hamburger";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import {
  SocialImage,
  SocialLink,
  SocialText,
  SocialWrapper,
} from "../components/socials/SocialComponents";

export const SocialsPage = () => {
  return (
    <>
      <NavBar />
      <Wrapper
        style={{
          minHeight: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src="/haikei-wave-bottom.svg"
          alt="wave-bottom"
          className="noDrag"
          style={{
            width: "100%",
            userSelect: "none",
          }}
        />
        <div
          className="content"
          style={{
            backgroundColor: "#363d57",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h1 style={{ textDecoration: "underline" }}>Social Links</h1>
          </div>
          <SocialWrapper>
            <SocialLink
              href="https://github.com/DasIschBims"
              target="_blank"
              rel="noreferrer"
            >
              <SocialImage
                src="/social/github.svg"
                alt="github"
                className="noDrag noSelect"
              />
              <SocialText>GitHub</SocialText>
            </SocialLink>
            <SocialLink
              href="https://twitter.com/dasischbims"
              target="_blank"
              rel="noreferrer"
            >
              <SocialImage
                src="/social/twitter.svg"
                alt="twitter"
                className="noDrag noSelect"
              />
              <SocialText>Twitter</SocialText>
            </SocialLink>
            <SocialLink
              href="https://discord.gg/ZURcscg"
              target="_blank"
              rel="noreferrer"
            >
              <SocialImage
                src="/social/discord.svg"
                alt="discord"
                className="noDrag noSelect"
              />
              <SocialText>Discord</SocialText>
            </SocialLink>
            <SocialLink
              href="https://steamcommunity.com/id/dasischbims/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialImage
                src="/social/steam.svg"
                alt="steam"
                className="noDrag noSelect"
              />
              <SocialText>Steam</SocialText>
            </SocialLink>
          </SocialWrapper>
        </div>
        <img
          src="/haikei-wave-top.svg"
          alt="wave-top"
          className="noDrag"
          style={{
            width: "100%",
            userSelect: "none",
          }}
        />
      </Wrapper>
      <Footer />
    </>
  );
};
