import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import {
  HeaderContainer,
  LogoExplanation,
  LogoTipo,
  SharedContainer,
} from "./SharedLayout.styled";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

const SharedLayout = () => {
  return (
    <SharedContainer id="hero">
      <AnimatedBackground />
      <HeaderContainer>
        <LogoTipo>CAMiLOPER</LogoTipo>
        <LogoExplanation
          className="name-expla"
          src="../../src/assets/images/CamiName.png"
          alt="Written name"
        />

        <NavBar />
      </HeaderContainer>

      <Outlet />
    </SharedContainer>
  );
};
export default SharedLayout;
