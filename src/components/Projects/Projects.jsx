import React, { useState } from "react";
import { dataprojects } from "../../assets/images/projects/dataprojects.js";

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
  Styledp,
  UsedTecho,
} from "./Projects.styled";
import LinkToProject from "../linksprojects/LinkToProject";
import ice2 from "../../assets/images/projects/ice2.png";
import ice2device from "../../assets/images/projects/device/icephone.png";
import {
  DirectLinksText,
  GITtext,
  GitIconLink,
  IMGStyleGit,
  IMGStyleWebSite,
  SiteIconLink,
  Sitetext,
} from "../linksprojects/LinkToProject.Styled.jsx";
import { SocialCircle, SocialMainContainer } from "../Social/Social.styled.jsx";

// import FrontendIcon from "../icons/frontend/FrontendIcon";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  const handleHideClick = () => {
    setSelectedIndex(null);
  };

  return (
    <MyPojectsSection id="projects">
      <ProjectsMainContainer>
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
                  <Styledp>Main technologies used:</Styledp>
                  <UsedTecho>{item.usedtechno}</UsedTecho>

                  <Styledp>Code Description in a Nutshell:</Styledp>
                  <AdInfoDesc>{item?.descriptIndeep}</AdInfoDesc>

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
