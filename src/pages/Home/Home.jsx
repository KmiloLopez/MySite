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
import heroImage from "../../../assets/heroImage.png";
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
          Nada mas satisfactorio que llevar una idea a la realidad
        </StyledH3>
      ) : (
        <GhostBox />
      )}
      <HomeContainer>
        {/* <Header> */}
        <Heroimg
          src={heroImage}
          alt="Developer Image face with blue background"
        />

        <TextContent>
          <h1>
            Ya tienes la idea? <br /> Yo tengo las herramientas para
            materializarla!{" "}
          </h1>
        </TextContent>
        {/* </Header> */}
      </HomeContainer>

      <Skills />
      <Projects />
      <Philosophy />
      <ThankYou />
      <Social />
    </>
  );
};

export default Home;
