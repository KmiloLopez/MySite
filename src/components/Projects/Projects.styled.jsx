import styled from "styled-components";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import { breakpoints } from "../../../assets/sizes";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  width: 100%;
  //height: 350px;
  align-items: center;
  border-radius: 5px;

  padding: 28px 50px 10px 50px;
`;
export const ImgStyle = styled.img`
  position: relative;
  //height: 100%;
  width: 50%;
  border-radius: 10px;
  -webkit-box-shadow: -7px 15px 38px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 15px 38px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -7px 15px 38px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: transform ease-out;
  &:hover {
    scale: 1.02;
  }

  &:hover + .img-device {
    opacity: 1;
    visibility: visible;
  }
  @media ${breakpoints.maxMobile} {
    width: 100%;
  }
  @media ${breakpoints.tabletDimensions} {
    width: 70%;
  }
`;
export const ImgStyleDevice = styled.img`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-out, visibility 0.4s ease-out;
  height: 80%;
  position: absolute;
  left: 250px;
  top: 100px;
  @media ${breakpoints.maxMobile} {
    left: 10px;
    top: 60px;
  }
  @media ${breakpoints.tabletDimensions} {
    left: 10px;
    top: 60px;
  }
`;
export const ProjectsMainContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  @media ${breakpoints.maxMobile} {
    width: 95%;
  }
  @media ${breakpoints.tabletDimensions} {
    width: 87%;
  }
`;
export const ProjectDescriptionContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;

  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 10px 10px 10px;
  overflow: hidden;
  overflow-wrap: break-word;
`;
export const ProjectDescription = styled.p`
  font-size: 1em;
  max-width: 100%;
`;

export const ProjectTitle = styled.p`
  position: absolute;
  font-size: 2em;
  height: fit-content;
  padding: 0.5em;
  border-radius: 20px;
  right: 0px;
  top: 120px;
  //glass effect
  //background-color: rgba(255, 255, 255, 0.3);
  background: linear-gradient(to right, rgba(250, 248, 250, 0.8), transparent);

  color: #222;

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media ${breakpoints.maxMobile} {
    font-size: 1em;
    top: -40px;
  }
  @media ${breakpoints.tabletDimensions} {
    font-size: 1.5em;
    top: 50px;
  }
`;

export const AdditionalContainer = styled.div`
  /* margin: 0 50px 0 50px; */
  color: var(--color-neon-dark-blue);
  border-radius: 10px;
  position: relative;
  padding: 25px 50px 0px 50px;
  //glass effect
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 77%;
  @media ${breakpoints.maxMobile} {
    width: 100%;
    padding: 25px 5px 0px 5px;
    margin-bottom: 30px;
  }
`;
export const AdInfoTitle = styled.div`
  font-size: 30px;
  margin-bottom: 25px;
  color: var(--primary);
  @media ${breakpoints.maxMobile} {
    font-size: 25px;
  }
`;
export const AdInfoDesc = styled.div`
  font-size: 18px;
`;
export const UsedTecho = styled.div`
  font-size: 22px;
  margin-bottom: 15px;
  @media ${breakpoints.maxMobile} {
    font-size: 17px;
    margin-bottom: 8px;
  }
`;
export const StyledCloseIcon = styled(KeyboardCapslockIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  /* width: 50px; */
  font-size: 3rem !important;
  cursor: pointer;

  &:hover {
    color: var(--primary); /* Cambia el color en hover, si lo deseas */
  }
`;
export const MyPojectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  /* Background image set */
  background-image: url("./src/assets/images/projects/background/fondotrans.png");
  background-size: auto;
  background-position: center;
  background-repeat: repeat;
  background-position: center;
`;

export const StyledParragraph = styled.h2`
  /* margin-left: 50px; */
`;
export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;

  @media ${breakpoints.maxMobile} {
    width: 95%;
  }
  @media ${breakpoints.tabletDimensions} {
    width: 100%;
  }
`;
