import styled from "styled-components";
import { breakpoints } from "../../../assets/sizes";

export const MySection = styled.section`
  background-color: var(--color-background-2);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 100px;
`;

export const Mydiv = styled.div`
  border-bottom: 1px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 100px;
  padding-top: 50px;
  @media ${breakpoints.maxMobile} {
    flex-direction: column-reverse;
    padding-bottom: 80px;
    padding-top: 30px;
  }
  @media ${breakpoints.tabletDimensions} {
    flex-direction: column-reverse;
  }
`;
export const Mydiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-top: 80px;
  padding-bottom: 50px;
  @media ${breakpoints.maxMobile} {
    flex-direction: column;
    padding-top: 60px;
    padding-bottom: 30px;
  }
  @media ${breakpoints.tabletDimensions} {
    flex-direction: column;
  }
`;
export const TextConteinerTop = styled.div`
  display: flex;
  align-items: center;
  @media ${breakpoints.maxMobile} {
    font-size: 14px;
  }
`;
export const MythinkText = styled.h3`
  font-style: italic;
  font-size: 40px;
  @media ${breakpoints.maxMobile} {
    font-size: 16px !important;
  }
  @media ${breakpoints.maxTablet} {
    font-size: 30px;
  }
`;
export const TextConteinerBottom = styled.div`
  display: flex;
  align-items: center;
  @media ${breakpoints.maxMobile} {
    font-size: 14px;
  }
`;

export const Myimg = styled.img`
  width: 500px;
  @media ${breakpoints.maxMobile} {
    width: 70%;
  }
`;
export const Styledh2 = styled.h2`
  font-size: 70px;
  @media ${breakpoints.maxMobile} {
    font-size: 30px;
  }
`;
export const PhiloText = styled.h3`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 80%;
  @media ${breakpoints.maxMobile} {
    width: 95%;
    font-size: 18px;
  }
  @media ${breakpoints.tabletDimensions} {
    width: 87%;
  }
`;
