import React, { useState } from "react";
//import { dataprojects } from "./../../assets/images/projects/dataprojects.js";

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
  //const [selectedIndex, setSelectedIndex] = useState(null);
  const [showFirstP, setShowFirstP] = useState(false);

  const handleClick1 = () => {
    setShowFirstP(!showFirstP);
  };
  const handleHideClick1 = () => {
    setShowFirstP(false);
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

        <>
          <ProjectContainer>
            <RelativeContainer>
              <ImgStyle onClick={() => handleClick1()} src={ice2} alt="some" />

              <ImgStyleDevice
                className="img-device"
                src={ice2device}
                alt="sea"
              />
              <ProjectTitle>IceCream Landing Page</ProjectTitle>
            </RelativeContainer>
          </ProjectContainer>
          {showFirstP === true && (
            <AdditionalContainer>
              <AdInfoTitle>IceCream Landing Page</AdInfoTitle>
              <AdInfoDesc>
                Here you can find all the details related to this project.Here
                you can find all the details related to this project.Here you
                can find all the details related to this project.Here you can
                find all the details related to this project.Here you can find
                all the details related to this project.Here you can find all
                the details related to this project.
              </AdInfoDesc>

              <StyledCloseIcon onClick={handleHideClick1} />

              <DirectLinksText>Direct links:</DirectLinksText>
              <SocialMainContainer>
                <SocialCircle>
                  <GitIconLink
                    href="https://github.com/KmiloLopez/Proyect-IceCream"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IMGStyleGit />
                    <GITtext className="git-text">Let's see the code</GITtext>
                  </GitIconLink>
                </SocialCircle>

                <SocialCircle>
                  <SiteIconLink
                    href="https://jorgemomo.github.io/iceCream/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IMGStyleWebSite />
                    <Sitetext className="site-text">
                      Let's check how it looks
                    </Sitetext>
                  </SiteIconLink>
                </SocialCircle>
              </SocialMainContainer>
            </AdditionalContainer>
          )}
        </>

        {/* 
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
        })} */}
      </ProjectsMainContainer>
    </MyPojectsSection>
  );
};

export default Projects;
