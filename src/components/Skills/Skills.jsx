import React, { useEffect, useRef, useState } from "react";
import {
  BackgroundContainer,
  Box1,
  Box2,
  Box2Child,
  CarouselContainer,
  H3,
  H4,
  H5,
  ImgStyle,
  ItemsRow,
  MySkills,
  SkillContainer,
  SkillsMainContainer,
  StyledP,
} from "./Skills.styled";
import { dataskills } from "../../assets/images/skills/dataskills";
import BackendIcon from "../icons/backend/BackendIcon";
import DesignerIcon from "../icons/designer/DesignerIcon";
import FrontendIcon from "../icons/frontend/FrontendIcon";

const Skills = () => {
  const carouselRef = useRef(null);
  console.log(carouselRef);
  const [viewportWidth, setViewportWidth] = useState(0); // Estado para almacenar el ancho del viewport
  const numberofboxes = viewportWidth / 13;
  console.log(numberofboxes);

  useEffect(() => {
    // Obtener el ancho del viewport del contenedor
    if (carouselRef.current) {
      const viewportWidth = carouselRef.current.clientWidth;
      setViewportWidth(viewportWidth); // Actualizar el estado con el ancho del viewport
      console.log("Viewport Width:", viewportWidth);
    }
  }, []); // El array vacío como segunda dependencia asegura que este efecto se ejecute una sola vez

  const duplicatedSkills = [...dataskills, ...dataskills, ...dataskills];

  return (
    <BackgroundContainer>
      <SkillsMainContainer ref={carouselRef}>
        <section id="skills">
          <Box1>
            <h2>Hi there, these are my SKILLS</h2>
          </Box1>
          <Box2>
            <Box2Child>
              <DesignerIcon />
              <H3>Design</H3>
              <H4>
                I value simple content structure, clean design patterns and
                thoughtful interactions.
              </H4>
              <StyledP>Design Tools:</StyledP>
              <MySkills>Photoshop</MySkills>
              <MySkills>Illustrator</MySkills>
              <MySkills>Figma</MySkills>
              <MySkills>Pen & Paper</MySkills>
            </Box2Child>
            <Box2Child>
              <BackendIcon />
              <H3>Backend Dev</H3>
              <H4>
                I genuinely care about people and enjoy helping them work on
                their craft, that's why we get the best bases.
              </H4>
              <StyledP>Developer Tools:</StyledP>

              <MySkills>Express</MySkills>
              <MySkills>Node JS</MySkills>
              <MySkills>Mongo DB</MySkills>
              <MySkills>Other Libraries</MySkills>
            </Box2Child>
            <Box2Child>
              <FrontendIcon />

              <H3>Frontend Dev</H3>
              <H4>
                I like to code things from scratch and enjoy bringing ideas to
                life in the browser.
              </H4>
              <StyledP>Developer Tools:</StyledP>
              <MySkills>React JS</MySkills>
              <MySkills>Redux</MySkills>
              <MySkills>Styled Components</MySkills>
              <MySkills>Framer Motion</MySkills>
              <MySkills>Other Libraries</MySkills>
            </Box2Child>
          </Box2>
        </section>
      </SkillsMainContainer>
      <CarouselContainer>
        <ItemsRow>
          {duplicatedSkills.map((item, index) => {
            return (
              <SkillContainer key={index}>
                <ImgStyle src={item.imgURL} alt={item.alt}></ImgStyle>
              </SkillContainer>
            );
          })}
        </ItemsRow>
      </CarouselContainer>
    </BackgroundContainer>
  );
};

export default Skills;
