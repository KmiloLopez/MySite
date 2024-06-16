import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../../assets/sizes";
const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`;
export const HomeContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0px auto;
  padding-bottom: 100px;
  @media ${breakpoints.maxMobile} {
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
  @media ${breakpoints.tabletDimensions} {
    flex-direction: column;
    align-items: center;
    width: 87%;
  }
`;
export const Heroimg = styled.img`
  width: 80%;
  @media ${breakpoints.maxMobile} {
    width: 95%;
  }
  @media ${breakpoints.tabletDimensions} {
    width: 50%;
  }
`;

export const Header = styled.header`
  display: flex;

  @media ${breakpoints.maxMobile} {
    flex-direction: column;
    align-items: center;
  }
`;
export const TextContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media ${breakpoints.maxMobile} {
    font-size: 14px;
  }
  @media ${breakpoints.tabletDimensions} {
    font-size: 20px;
  }
`;

export const GhostBox = styled.div`
  height: 64px;
`;
export const StyledH3 = styled.h3`
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media ${breakpoints.maxMobile} {
    font-size: 16px;
    text-align: center;
  }
  @media ${breakpoints.tabletDimensions} {
  }
`;
