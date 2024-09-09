import React, { useState } from "react";

import {
  GhostBox,
  Header,
  Heroimg,
  HomeContainer,
  StyledH3,
  TextContent,
} from "./Home.styled";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Social from "../../components/Social/Social";
import heroImage from "../../assets/heroImage.png";
import { Psychology } from "@mui/icons-material";
import Philosophy from "../../components/Philosophy/Philosophy";
import ThankYou from "../../components/ThankYou/ThankYou";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  setTimeout(() => {
    setShowMessage(true);
  }, 5000);
  //const waitfunc = () => {};

  return (
    <>
      {showMessage ? (
        <StyledH3>
          Nothing is more satisfying than turning an idea into reality
        </StyledH3>
      ) : (
        <GhostBox />
      )}
      <HomeContainer>
        <Heroimg
          src={heroImage}
          alt="Developer Image face with blue background"
        />

        <TextContent>
          <h1>
            Got the idea? <br /> I have the tools to bring it to life!
          </h1>
          <StyledH3>
            I'm Camilo Lopez, a full-stack web developer who enjoys coding
            robust and scalable applications with exceptional user experiences.
          </StyledH3>
        </TextContent>
      </HomeContainer>
      <StyledH3>▼</StyledH3>

      <Skills />
      <Projects />
      <Philosophy />
      <ThankYou />
      <Social />
    </>
  );
};

export default Home;
