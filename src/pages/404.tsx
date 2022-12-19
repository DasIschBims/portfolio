import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import { Link } from "react-router-dom";

export const NotFound404 = () => {
  return (
    <>
      <NavBar />
      <Wrapper style={{ minHeight: "100vh" }}>
        <div
          style={{
            transition: "all 0.1125s ease-in-out",
            cursor: "pointer",
            userSelect: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter =
              "drop-shadow(0 0 0.5rem #fe5573) drop-shadow(0 0 0.5rem #fe5573)";
            e.currentTarget.style.transform = "rotate(-1deg) scale(1.025)";
            e.currentTarget.style.transformOrigin = "center";
            e.currentTarget.style.borderRadius = "0.5rem";
            document.getElementById("back-to-home")!.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "";
            e.currentTarget.style.transform = "";
            e.currentTarget.style.transformOrigin = "";
            e.currentTarget.style.borderRadius = "";
            document.getElementById("back-to-home")!.style.opacity = "0";
          }}
        >
          <img
            src="/404.gif"
            alt="404"
            style={{
              scale: "1",
              transformOrigin: "center",
              borderRadius: "0.5rem",
            }}
          />
          <Link
            to="/"
            id="back-to-home"
            style={{
              opacity: "0",
              transition: "all 0.2s ease-in-out",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fe5573",
              fontSize: "1.5rem",
              fontWeight: "bold",
              background: "rgba(0, 0, 0, 0.8)",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              textAlign: "center",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            take me back home
          </Link>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};
