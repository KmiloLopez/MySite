import React, { useState } from "react";
import { dataprojects } from "/MySite/assets/images/projects/dataprojects";

import {
  AdInfoDesc,
  AdInfoTitle,
  AdditionalContainer,
  ImgStyle,
  ImgStyleDevice,
  MyPojectsSection,
  ProjectContainer,
  ProjectTitle,
  ProjectsMainContainer,
  RelativeContainer,
  StyledCloseIcon,
  StyledParragraph,
} from "./Projects.styled";
import LinkToProject from "../linksprojects/LinkToProject";
// import FrontendIcon from "../icons/frontend/FrontendIcon";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  const handleHideClick = (index) => {
    setSelectedIndex(null);
  };

  return (
    <MyPojectsSection id="projects">
      {/* <h2>PROJECTS</h2>
      <StyledParragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        odit corporis! Velit incidunt quia esse. Id deleniti temporibus
        reprehenderit, incidunt est mollitia, quo totam consectetur voluptatibus
        ut possimus neque aliquam!
      </StyledParragraph> */}

      <ProjectsMainContainer>
        <h1>PROJECTS</h1>
        <StyledParragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          numquam ipsam, corporis, totam quae itaque odit placeat cumque aliquid
          rem unde eum inventore, nisi asperiores libero! Et, at sequi.
        </StyledParragraph>

        {dataprojects.map((item, index) => {
          return (
            <>
              <ProjectContainer key={index}>
                <RelativeContainer>
                  <ImgStyle
                    onClick={() => handleClick(index)}
                    src={item.imgURL}
                    alt={item.alt}
                  />

                  <ImgStyleDevice
                    className="img-device"
                    src={item.imgURLdevice}
                    alt={item.altdevice}
                  />
                  <ProjectTitle>{item.title}</ProjectTitle>
                </RelativeContainer>
              </ProjectContainer>
              {selectedIndex === index && (
                <AdditionalContainer>
                  <AdInfoTitle>{item.title}</AdInfoTitle>
                  <AdInfoDesc>{item.descript}</AdInfoDesc>

                  <StyledCloseIcon onClick={handleHideClick} />

                  <LinkToProject item={item} />
                </AdditionalContainer>
              )}
            </>
          );
        })}
      </ProjectsMainContainer>
    </MyPojectsSection>
  );
};

export default Projects;
